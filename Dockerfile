# Step 1: Build the Next.js application
FROM node:18 AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.17.1 --activate

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN pnpm run build

# Step 2: Create a lightweight production image
FROM node:18-alpine AS runner

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.17.1 --activate

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["node", "server.js"]
