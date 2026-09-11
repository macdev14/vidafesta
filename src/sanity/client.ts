import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "../../sanity/env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: process.env.SANITY_API_WRITE_TOKEN,
    })
  : null;
