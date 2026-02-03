# Shakers - Buscador de Proyectos

Prueba técnica Full Stack: landing de proyectos con filtros, detalle y flujo de aplicación.

## Quick Start

```bash
# Requisitos: Node >= 21, pnpm >= 9

pnpm install  # Builda automáticamente @shakers/shared
pnpm dev
```

- **Web**: http://localhost:3000
- **API**: http://localhost:3001

## Stack

| Capa     | Tech                                        |
| -------- | ------------------------------------------- |
| Frontend | Next.js 14 (App Router) + Material UI       |
| Backend  | NestJS 10 + Arquitectura Hexagonal          |
| Monorepo | pnpm workspaces                             |
| Types    | TypeScript strict + Zod schemas compartidos |

## Estructura

```
├── apps/
│   ├── api/                 # NestJS
│   │   ├── src/
│   │   │   ├── domain/      # Puertos (interfaces)
│   │   │   ├── application/ # Servicios
│   │   │   └── infrastructure/
│   │   │       ├── http/    # Controllers
│   │   │       └── persistence/  # Repositorios JSON
│   │   └── data/            # JSONs de proyectos y static data
│   │
│   └── web/                 # Next.js
│       └── src/
│           ├── app/         # Páginas (App Router)
│           ├── components/  # UI components
│           ├── hooks/       # Custom hooks (filters, projects, etc)
│           └── lib/         # API client, utils
│
└── packages/
    └── shared/              # Types + Zod schemas
```

## Endpoints

```
GET  /health                    → Health check
GET  /static-data               → Skills, specialties, industries, categories
GET  /projects                  → Lista con filtros y ordenamiento
GET  /projects/:id              → Detalle
POST /projects/:id/applications → Aplicar (body: { positionId })
DEL  /projects/:id/applications → Retirar candidatura
```

**Filtros disponibles** (query params):

- `specialties[]`, `skills[]`, `industry[]`, `projectType[]`
- `specialtiesOp`, `skillsOp`, etc. → `AND` | `OR` (default: OR)
- `order` → `publishedAt_desc` | `publishedAt_asc`

## Testing

```bash
pnpm test             # Run all tests
pnpm test:watch       # Watch mode
pnpm test:cov         # Coverage report
```

**Cobertura**: 34 tests pasando

- `ApplicationsService`: apply, withdraw, state management
- `ProjectJsonRepository`: filtros, operadores AND/OR, sorting

## Features

### Funcionalidad

- [x] Listado de proyectos con cards
- [x] Modal de filtros (especialidades, skills, industria, tipo)
- [x] Operadores AND/OR por cada filtro
- [x] Bloque de "Filtros aplicados" con posibilidad de remover
- [x] Ordenamiento por fecha de publicación (toggle directo)
- [x] Detalle del proyecto completo
- [x] Flujo aplicar/retirar candidatura con toast
- [x] Animación de entrada (bounce desde izquierda)
- [x] Diseño responsive (mobile + desktop)

### Code Quality

- [x] Tests unitarios en backend (35 tests, ~95% coverage)
- [x] Validación con Zod en API y runtime
- [x] Exception filters globales con respuestas estructuradas
- [x] Error handling específico en frontend
- [x] TypeScript strict mode
- [x] ESLint + Prettier configurados
- [x] Husky + Commitlint para commits consistentes

## Scripts

```bash
pnpm dev              # API + Web en paralelo (rápido)
pnpm dev:safe         # Build secuencial sin errores transitorios
pnpm build            # Build de producción
pnpm test             # Run backend tests
pnpm test:watch       # Tests en watch mode
pnpm test:cov         # Tests con coverage
pnpm lint             # ESLint
pnpm format           # Prettier
pnpm typecheck        # Type checking
```

## Decisiones técnicas

**¿Por qué arquitectura hexagonal en el backend?**
Separa la lógica de negocio de los detalles de infraestructura. Facilita testear y cambiar el origen de datos (hoy JSON, mañana MongoDB) sin tocar la lógica.

**¿Por qué pnpm workspaces?**
Manejo limpio de dependencias compartidas. El package `@shakers/shared` exporta tipos y schemas que usan tanto el frontend como el backend.

**¿Por qué Zod?**
Validación en runtime + inferencia de tipos. Un solo schema genera el tipo TypeScript y valida los datos.

**¿Por qué MUI?**
Componentes accesibles out-of-the-box. El `sx` prop permite colocar estilos con lógica responsive sin saltar entre archivos.

## Arquitectura destacada

### Backend

- **Hexagonal Architecture**: Domain (ports) → Application (services) → Infrastructure (controllers, repositories)
- **Exception Filters**: Respuestas de error estructuradas y consistentes
- **Zod Validation**: Validación en runtime de requests y datos JSON
- **Logging**: Logger de NestJS para debugging

### Frontend

- **Custom Hooks**: Separación de lógica de estado (`use-filters`, `use-applications`, `use-projects`)
- **API Client**: Error handling con `ApiError` class para mensajes específicos
- **Theme System**: Paleta de colores centralizada con variables CSS de Figma
- **Performance**: `useMemo` en cálculos costosos, optimización de re-renders

### Shared

- **Single Source of Truth**: Types y schemas compartidos entre FE/BE
- **Type Safety**: Zod schemas generan tipos TypeScript automáticamente

## Commits

Conventional Commits: `feat(web): add filters modal`, `fix(api): handle empty results`, `test(api): add unit tests`

---

_Prueba técnica para Shakers_
