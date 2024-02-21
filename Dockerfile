FROM node:20.8.0-alpine AS node_base

FROM node_base AS deps
WORKDIR /app
COPY package*.json ./
RUN ["npm", "install"]

FROM node_base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./
RUN ["npm", "run", "dev:serve"]
