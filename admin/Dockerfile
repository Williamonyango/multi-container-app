FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
ARG VITE_API_URL=/api/v1/
ENV VITE_API_URL=${VITE_API_URL}
COPY . .
ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
RUN VITE_SUPABASE_URL=${SUPABASE_URL} VITE_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY} npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html