# Festavida — Site de Agendamento

Site de agendamento e apresentação do **Vida Espaço para Festas e Eventos** (@festavida), salão de festas em Bragança Paulista, SP.

## Funcionalidades

- Landing page com informações do espaço, pacotes e galeria
- Fluxo de agendamento com calendário e formulário
- Integração com WhatsApp para confirmação
- CMS Sanity para gerenciar conteúdo e reservas (`/studio`)
- Dados mock quando o Sanity não está configurado

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router)
- [Sanity CMS](https://www.sanity.io/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [react-day-picker](https://react-day-picker.js.org/)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse:
- Site: http://localhost:3000
- Agendamento: http://localhost:3000/agendar
- CMS Sanity Studio: http://localhost:3000/studio

## Configurar Sanity

1. Crie um projeto em [sanity.io/manage](https://www.sanity.io/manage)
2. Copie `.env.example` para `.env.local` e preencha as variáveis
3. Crie um token de API com permissão de escrita
4. Inicie o studio e cadastre:
   - **Configurações do Site** (documento único)
   - Pacotes de evento
   - Imagens da galeria

## Deploy

Recomendado: [Vercel](https://vercel.com) + Sanity hosted.

## Contato do espaço

- Instagram: [@festavida](https://instagram.com/festavida)
- WhatsApp: +55 11 96902-1122
- Endereço: Av. José Gomes da Rocha Leal, 1451 — Centro, Bragança Paulista, SP
