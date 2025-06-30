import React from 'react'

const LargeComponent: React.FC = () => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">
        Componente Cargado Dinámicamente
      </h3>
      <p className="text-light mb-4">
        Este componente se carga solo cuando es necesario usando React.lazy y 
        dynamic import de Next.js, mejorando el rendimiento inicial de la página.
      </p>
      
      <div className="grid md-grid-cols-2 mt-6" style={{ gap: '1.5rem' }}>
        <div className="card">
          <h4 className="font-semibold mb-2">Ventajas del Lazy Loading:</h4>
          <ul className="text-sm text-light" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.25rem' }}>Reduce el tiempo de carga inicial</li>
            <li style={{ marginBottom: '0.25rem' }}>Mejora el rendimiento percibido</li>
            <li style={{ marginBottom: '0.25rem' }}>Optimiza el uso de recursos</li>
            <li style={{ marginBottom: '0.25rem' }}>Mejor experiencia de usuario</li>
          </ul>
        </div>
        
        <div className="card">
          <h4 className="font-semibold mb-2">Implementación:</h4>
          <ul className="text-sm text-light" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.25rem' }}>React.lazy() para componentes</li>
            <li style={{ marginBottom: '0.25rem' }}>Suspense para manejo de carga</li>
            <li style={{ marginBottom: '0.25rem' }}>Dynamic imports en Next.js</li>
            <li style={{ marginBottom: '0.25rem' }}>Code splitting automático</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LargeComponent