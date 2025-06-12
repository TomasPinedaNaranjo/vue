# Proyecto Vue - Aprendizaje

Este es un proyecto de aprendizaje de Vue.js con un componente contador interactivo.

## 🚀 Características

- Componente contador con incremento/decremento
- Número aleatorio que cambia el color del componente
- Linting automático con ESLint y Prettier
- GitHub Actions para CI/CD

## 📦 Instalación

```bash
npm install
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview

# Linting y corrección automática
npm run lint

# Verificar linting sin corregir
npm run lint:check

# Formatear código
npm run format

# Verificar formato
npm run format:check
```

## 🔧 GitHub Actions

El proyecto incluye workflows de GitHub Actions que se ejecutan automáticamente:

### Workflow de Linting (`vue-lint.yml`)
- Se ejecuta en cada push a `main` o `master`
- También en pull requests
- Incluye:
  - ESLint para Vue.js
  - Prettier para formateo
  - Build del proyecto
  - Pruebas en Node.js 18 y 20

### Workflow Completo (`lint.yml`)
- Workflow más detallado con más herramientas
- Incluye TypeScript checking (si está configurado)
- Artifacts de build

## 📁 Estructura del Proyecto

```
├── .github/workflows/     # GitHub Actions
├── src/
│   ├── components/        # Componentes Vue
│   │   └── GameCounter.vue
│   └── App.vue           # Componente principal
├── .eslintrc.json        # Configuración ESLint
├── .prettierrc          # Configuración Prettier
└── package.json
```

## 🎯 Conceptos de Vue Aprendidos

- **Reactivity**: `ref()` para variables reactivas
- **Props**: Comunicación entre componentes padre-hijo
- **Event Handling**: `@click` para eventos
- **Computed Properties**: `computed()` para valores calculados
- **Template Syntax**: `{{ }}` para interpolación
- **Dynamic Styling**: `:style` para estilos dinámicos
- **Conditional Rendering**: `v-if` para mostrar/ocultar elementos

## 🔍 Linting y Formateo

El proyecto usa:
- **ESLint**: Para detectar errores y problemas de código
- **Prettier**: Para formateo consistente del código
- **eslint-plugin-vue**: Reglas específicas para Vue.js

### Reglas principales:
- No console.log en producción
- Nombres de componentes de una sola palabra permitidos
- Variables no utilizadas como warning
- Formateo consistente con Prettier
