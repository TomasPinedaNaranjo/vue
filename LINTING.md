# 🧹 Sistema de Linting y Formateo

Este proyecto incluye un sistema completo de linting y formateo de código para mantener la calidad y consistencia del código.

## 🛠️ Herramientas Configuradas

### **ESLint**
- Linter de JavaScript/TypeScript
- Reglas específicas para Vue.js 3
- Integración con Prettier
- Detección de errores y warnings

### **Prettier**
- Formateador de código automático
- Configuración consistente
- Soporte para Vue, JavaScript, CSS y JSON

### **GitHub Actions**
- Linting automático en cada push/PR
- Verificación de calidad de código
- Build automático para detectar errores

## 📋 Scripts Disponibles

```bash
# Linting
npm run lint          # Ejecutar ESLint y corregir errores automáticamente
npm run lint:check    # Verificar código sin corregir
npm run lint:fix      # Ejecutar linting y formateo completo

# Formateo
npm run format        # Formatear código con Prettier
npm run format:check  # Verificar formato sin cambiar archivos

# Calidad completa
npm run quality       # Ejecutar todas las verificaciones
```

## ⚙️ Configuración

### **ESLint (.eslintrc.json)**
- Reglas estrictas para Vue.js
- Detección de variables no utilizadas
- Prevención de errores comunes
- Integración con Prettier

### **Prettier (.prettierrc)**
- Comillas simples
- Punto y coma al final
- Ancho máximo de 80 caracteres
- Indentación de 2 espacios

### **VSCode (.vscode/settings.json)**
- Formateo automático al guardar
- Corrección automática de ESLint
- Configuración específica para Vue

## 🚀 Workflows de GitHub Actions

### **Lint.yml**
- Ejecuta en push/PR a main/master
- Verifica ESLint y Prettier
- Construye el proyecto

### **Code-Quality.yml**
- Análisis más profundo
- Detección de console.log
- Análisis de tamaño de archivos
- Subida de artifacts

## 📝 Reglas Importantes

### **Vue.js**
- Nombres de componentes en PascalCase
- Props con tipos definidos
- Orden específico de tags (script, template, style)
- No usar v-html sin validación

### **JavaScript**
- Usar `const` y `let` en lugar de `var`
- Comillas simples para strings
- Punto y coma obligatorio
- Espaciado consistente

### **Buenas Prácticas**
- No console.log en producción
- Variables no utilizadas como warning
- Comentarios TODO documentados
- Imports organizados

## 🔧 Configuración Local

### **Instalar Extensiones VSCode**
```json
{
  "recommendations": [
    "Vue.volar",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss"
  ]
}
```

### **Configuración Automática**
- Formateo al guardar: ✅ Activado
- Corrección ESLint: ✅ Activado
- Organización de imports: ✅ Activado

## 🚨 Errores Comunes y Soluciones

### **Error: "Unexpected console statement"**
```bash
# Solución: Usar logger en lugar de console.log
npm run lint:fix
```

### **Error: "Missing semicolon"**
```bash
# Solución: Agregar punto y coma
npm run format
```

### **Error: "Component name must be PascalCase"**
```bash
# Solución: Renombrar componente
# Ejemplo: myComponent.vue → MyComponent.vue
```

## 📊 Métricas de Calidad

El workflow de GitHub Actions incluye:
- ✅ Verificación de sintaxis
- ✅ Formateo consistente
- ✅ Detección de errores
- ✅ Análisis de tamaño de archivos
- ✅ Build exitoso

## 🎯 Beneficios

1. **Consistencia**: Código uniforme en todo el proyecto
2. **Calidad**: Detección temprana de errores
3. **Productividad**: Formateo automático
4. **Colaboración**: Estándares compartidos
5. **Mantenimiento**: Código más legible y mantenible 