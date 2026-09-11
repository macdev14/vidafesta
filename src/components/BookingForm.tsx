"use client";

import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { format, startOfDay } from "date-fns";
import { Calendar, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import type { EventPackage } from "@/lib/types";
import { whatsappLink } from "@/lib/data";
import "react-day-picker/style.css";

interface BookingFormProps {
  packages: EventPackage[];
  bookedDates: string[];
  whatsapp: string;
  initialPackageId?: string;
}

const eventTypes = [
  { value: "aniversario", label: "Aniversário" },
  { value: "casamento", label: "Casamento / Noivado" },
  { value: "corporativo", label: "Corporativo" },
  { value: "confraternizacao", label: "Confraternização" },
  { value: "formatura", label: "Formatura" },
  { value: "outro", label: "Outro" },
];

export function BookingForm({
  packages,
  bookedDates,
  whatsapp,
  initialPackageId,
}: BookingFormProps) {
  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    packageId: initialPackageId || "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const disabledDates = useMemo(() => {
    const booked = bookedDates.map((d) => startOfDay(new Date(d + "T12:00:00")));
    return [{ before: today }, ...booked];
  }, [bookedDates, today]);

  const selectedPackage = packages.find((p) => p._id === form.packageId);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate) {
      setErrorMessage("Selecione uma data para o evento.");
      return;
    }
    if (!form.name || !form.phone || !form.eventType) {
      setErrorMessage("Preencha nome, telefone e tipo de evento.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      ...form,
      eventDate: format(selectedDate, "yyyy-MM-dd"),
      guestCount: form.guestCount ? Number(form.guestCount) : undefined,
      packageId: form.packageId || undefined,
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar solicitação");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado");
    }
  }

  if (status === "success") {
    const dateStr = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";
    const waMessage = [
      "Olá! Acabei de solicitar um agendamento pelo site Festavida.",
      "",
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `Data desejada: ${dateStr}`,
      `Tipo: ${eventTypes.find((t) => t.value === form.eventType)?.label || form.eventType}`,
      selectedPackage ? `Pacote: ${selectedPackage.title}` : "",
      form.guestCount ? `Convidados: ${form.guestCount}` : "",
      form.message ? `Observações: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return (
      <div className="rounded-2xl border border-[#d4a574]/30 bg-[#d4a574]/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#d4a574]" />
        <h2 className="mt-4 font-serif text-2xl text-[#f5e6d3]">Solicitação enviada!</h2>
        <p className="mt-3 text-[#f5e6d3]/70">
          Recebemos seu pedido de agendamento para <strong>{dateStr}</strong>. Entraremos em
          contato em breve para confirmar disponibilidade.
        </p>
        <a
          href={whatsappLink(whatsapp, waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition hover:bg-[#20bd5a]"
        >
          <MessageCircle className="h-5 w-5" />
          Confirmar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-2">
      <div>
        <div className="mb-4 flex items-center gap-2 text-[#d4a574]">
          <Calendar className="h-5 w-5" />
          <h2 className="font-serif text-xl text-[#f5e6d3]">Escolha a data</h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ptBR}
            disabled={disabledDates}
            className="mx-auto !text-[#f5e6d3]"
            modifiersClassNames={{
              selected: "!bg-[#d4a574] !text-[#1a0f14] rounded-lg",
              today: "!text-[#d4a574] font-bold",
            }}
          />
        </div>
        <p className="mt-3 text-xs text-[#f5e6d3]/50">
          Datas em cinza já possuem reserva ou estão indisponíveis. A confirmação final será feita
          pela nossa equipe.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif text-xl text-[#f5e6d3]">Seus dados</h2>

        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-[#f5e6d3]/70">
            Nome completo *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm text-[#f5e6d3]/70">
              Telefone / WhatsApp *
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="(11) 99999-9999"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-[#f5e6d3]/70">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="eventType" className="mb-1 block text-sm text-[#f5e6d3]/70">
              Tipo de evento *
            </label>
            <select
              id="eventType"
              required
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
            >
              <option value="">Selecione</option>
              {eventTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guestCount" className="mb-1 block text-sm text-[#f5e6d3]/70">
              Nº de convidados
            </label>
            <input
              id="guestCount"
              type="number"
              min={1}
              max={500}
              value={form.guestCount}
              onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="packageId" className="mb-1 block text-sm text-[#f5e6d3]/70">
            Pacote de interesse
          </label>
          <select
            id="packageId"
            value={form.packageId}
            onChange={(e) => setForm({ ...form, packageId: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
          >
            <option value="">Consultar opções</option>
            {packages.map((p) => (
              <option key={p._id} value={p._id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-[#f5e6d3]/70">
            Observações
          </label>
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Conte-nos mais sobre seu evento..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#f5e6d3] outline-none focus:border-[#d4a574]"
          />
        </div>

        {errorMessage && (
          <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-300">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d4a574] py-4 font-semibold text-[#1a0f14] transition hover:bg-[#e8c49a] disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar agendamento"
          )}
        </button>
      </div>
    </form>
  );
}
