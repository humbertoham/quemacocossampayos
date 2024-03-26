


const stats = [
    { id: 1, name: 'Años de experiencia', value: '+2' },
    { id: 2, name: 'Clientes Satisfechos', value: '100%' },
    { id: 3, name: 'Clientes Atendidos', value: '+300' },
    
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white mx-8  py-24 sm:py-32">
        <div className="mx-auto max-w-6xl py-16 rounded-3xl stat px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-xl leading-7 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-7xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  