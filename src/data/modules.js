export const modules = [
  {
    id: 'contabilidad',
    name: 'Contabilidad',
    description: 'Gestión de cuentas, balances y reportes financieros',
    icon: '📊',
    color: 'from-blue-500 to-blue-700',
    route: '/contabilidad'
  },
  {
    id: 'facturacion',
    name: 'Facturación',
    description: 'Creación de facturas, cotizaciones y gestión de ventas',
    icon: '🧾',
    color: 'from-green-500 to-green-700',
    route: '/facturacion'
  },
  {
    id: 'inventario',
    name: 'Inventario',
    description: 'Control de stock, productos y gestión de almacén',
    icon: '📦',
    color: 'from-purple-500 to-purple-700',
    route: '/inventario'
  },
  {
    id: 'recursos-humanos',
    name: 'Recursos Humanos',
    description: 'Gestión de empleados, nómina y recursos humanos',
    icon: '👥',
    color: 'from-orange-500 to-orange-700',
    route: '/recursos-humanos'
  },
  {
    id: 'compras',
    name: 'Compras',
    description: 'Gestión de proveedores, órdenes de compra y pagos',
    icon: '🛒',
    color: 'from-red-500 to-red-700',
    route: '/compras'
  },
  {
    id: 'reportes',
    name: 'Reportes',
    description: 'Análisis, reportes y dashboards ejecutivos',
    icon: '📈',
    color: 'from-indigo-500 to-indigo-700',
    route: '/reportes'
  }
];

export const defaultUser = {
  name: 'Usuario Ejemplo',
  role: 'Administrador'
};
