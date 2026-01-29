# Shakers - Full Stack Challenge

Monorepo para la prueba técnica de Shakers: Landing de proyectos con buscador y filtros.

## Stack Tecnológico

- **Frontend**: Next.js 14+ con Material UI
- **Backend**: NestJS 10+ con arquitectura hexagonal
- **Monorepo**: pnpm workspaces
- **Lenguaje**: TypeScript strict mode
- **Validación**: Zod schemas compartidos

## Estructura del Proyecto

```
shakers/
├── apps/
│   ├── api/          # NestJS backend
│   └── web/          # Next.js frontend
├── packages/
│   └── shared/       # Types, DTOs, Zod schemas compartidos
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── .eslintrc.cjs
├── .prettierrc
└── commitlint.config.js
```

## Requisitos

- Node.js >= 20.0.0
- pnpm >= 9.0.0

## Inicio Rápido

```bash
# 1. Instalar dependencias
pnpm install

# 2. Configurar variables de entorno
cp apps/api/.env.example apps/api/.env

# 3. Iniciar API (puerto 3001)
pnpm --filter @shakers/api dev

# 4. Iniciar Web (puerto 3000) - en otra terminal
pnpm --filter @shakers/web dev

# O iniciar ambos en paralelo
pnpm dev
```

### URLs

| Servicio     | URL                          |
| ------------ | ---------------------------- |
| API          | http://localhost:3001        |
| Web          | http://localhost:3000        |
| Health Check | http://localhost:3001/health |

## Variables de Entorno

### API (`apps/api/.env`)

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

## Scripts Disponibles

```bash
# Desarrollo
pnpm dev                          # Inicia todos los servicios
pnpm --filter @shakers/api dev    # Solo API
pnpm --filter @shakers/web dev    # Solo Web

# Build
pnpm build                        # Construye todos los paquetes
pnpm --filter @shakers/api build  # Solo API

# Linting y formato
pnpm lint                         # Ejecuta ESLint
pnpm lint:fix                     # Corrige errores de ESLint
pnpm format                       # Formatea código con Prettier
pnpm format:check                 # Verifica formato

# Type checking
pnpm typecheck                    # Verifica tipos en todos los paquetes
```

## Convención de Commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(api): add projects endpoint
fix(web): resolve filter modal issue
chore(deps): update dependencies
```

### Scopes disponibles

- `api` - Backend NestJS
- `web` - Frontend Next.js
- `shared` - Package compartido
- `root` - Configuración raíz
- `deps` - Dependencias
- `config` - Configuración

## Arquitectura

El proyecto sigue los principios de **arquitectura hexagonal** (ports & adapters):

### Backend (NestJS)

```
apps/api/src/
├── domain/           # Entidades y reglas de negocio
├── application/      # Casos de uso
├── infrastructure/   # Adaptadores (repositorios, controllers)
└── shared/           # Utilidades compartidas
```

### Frontend (Next.js)

```
apps/web/src/
├── app/              # App Router de Next.js
├── components/       # Componentes React
├── hooks/            # Custom hooks
├── services/         # Servicios API
└── types/            # Tipos locales
```

## Funcionalidades

### Endpoints API

1. `GET /static-data` - Datos estáticos (skills, specialties, industries, etc.)
2. `GET /projects` - Listado de proyectos con filtros y ordenamiento
3. `GET /projects/:id` - Detalle de proyecto
4. `POST /projects/:id/applications` - Aplicar a proyecto
5. `DELETE /projects/:id/applications` - Retirar candidatura

### Pantallas Frontend

1. `/projects` - Landing con listado, búsqueda y filtros
2. `/projects/[id]` - Detalle del proyecto con opción de aplicar

## Licencia

Prueba técnica - Uso privado
