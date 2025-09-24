
// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Ilse Paloma",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quinceLila1.png"
  },
  
  event: {
    celebrant: "Ilse Paloma Falcon Zarate",
    parents: {
      father: "",
      mother: "Mireya Falcon Zarate"
    },
    date: {
      full: "Viernes 14 de Noviembre 2025",
      day: "Viernes",
      date: "14 de Noviembre 2025"
    },
    ceremony: {
      time: "17:00 hrs.",
      venue: "Iglesia De Nuestra Señora De Guadalupe",
      address: "JUAREZ No. 102 OTE. COL. CENTRO, Villa Hidalgo, Nayarit",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/z3eoZpib7E9Ck3F86"
    },
    party: {
      time: "19:30 hrs.",
      venue: "Salon de Eventos Los Lirios",
      address: "Los Lirios 714 col 3 caminos , atrás del HEB Pablo Livas",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/vnMRK8MEGswPthbF7"
    },
    dressCode: "Formal",
    restrictions: ""
  },

  countdown: {
    targetDate: "December 20, 2025 17:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Favor de confirmar antes del evento.",
    subtitle: "",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día.",
    options: [
      {
        icon: "🎁",
        title: "Regalo Sorpresa",
        description: "Mi mejor regalo es compartir contigo este gran día.",
        details: "Si deseas hacerme un regalo, ¡estaré encantada de recibirlo!"
      },
      {
        icon: "🎁",
        title: "Sobre con Efectivo",
        description: "Compartir este día contigo es lo más importante para mí.",
        details: "Si lo prefieres, puedes hacerme un regalo en efectivo."
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 