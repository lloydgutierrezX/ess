import { config } from 'dotenv';
import path from 'path';

const envFile = `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`;
config({ path: path.resolve(process.cwd(), envFile) });

export const PORT = process.env.PORT || 3000;
export const DATABASE_URL = process.env.DATABASE_URL!;

export const KEYCLOAK = {
  url: process.env.KEYCLOAK_URL!,
  realm: process.env.KEYCLOAK_REALM!,
  clientId: process.env.KEYCLOAK_CLIENT_ID!
};