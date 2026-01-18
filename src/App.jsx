import { useState } from "react"
import fondo from "./assets/fondo.jpg"
import fondo6 from "./assets/fondo 6.jpg"
import { useEffect } from "react"


function App() {
  const [abierto, setAbierto] = useState(false)
  const fechaEvento = new Date("2026-02-29T19:00:00");
  const mensajeWhats = encodeURIComponent(
    "Hola Adriana😊\nConfirmo mi asistencia a tu cumpleaños🎉"
  );

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const diferencia = fechaEvento - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      );
      const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
      );
      const segundos = Math.floor(
        (diferencia / 1000) % 60
      );

      setTiempo({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-200 flex justify-center">
      <div className="w-full max-w-sm min-h-screen ">
        {!abierto ? (
          // Pantalla inicial con fondo
          <div
            onClick={() => setAbierto(true)}
            className="min-h-screen w-full flex items-center justify-center cursor-pointer overflow-hidden animate-fade-in"
            style={{
              backgroundImage: `url(${fondo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}

          >
            <div className="grid place-items-top min-h-screen animate-fade-in">
              <div className="flex flex-col items-center space-y-4 translate-y-40">
                <h1 className="text-4xl font-medium font-pacifico text-[#3a3a3a]">
                  Mi Cumpleaños
                </h1>

                <h2 className="text-6xl font-medium font-pacifico text-[#3a3a3a]">
                  Adriana
                </h2>

                <span
                  className=" text-[#7b7b7b] text-2xl font-light tracking-wide animate-pulse
             px-6 py-3 rounded-full font-gorditas"
                >
                  Toca para abrir
                </span>
              </div>
            </div>
          </div>
        ) : (

          // Contenido de la invitación
          <main className="
           w-full
    min-h-screen
    flex flex-col items-center
    pt-16 pb-16
    text-center space-y-5
    animate-fade-in"
             style={{
              backgroundImage: `url(${fondo6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            >
            {/* Texto */}
            <h2 className="text-4xl font-pacifico text-[#3a3a3a]">
              ¿Cuándo?
            </h2>
            <p className="text-[#616161] font-gorditas">
              Sábado 28 de Febrero · 2:00 PM
            </p>
            <h2 className="text-4xl font-pacifico text-[#3a3a3a]">
              Tiempo Restante
            </h2>
            {/* Cuenta regresiva */}
            <div className="flex justify-center gap-4 ">
              {Object.entries(tiempo).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-pacifico text-[#3a3a3a]">
                    {value}
                  </div>
                  <div className="text-xs uppercase tracking-wide font-gorditas text-[#616161]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <section className="mt-4 space-y-6">
              <h2 className="text-4xl font-pacifico text-[#3a3a3a]">
                ¿Dónde?
              </h2>

              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.09032691161605!2d-96.71841262191444!3d17.085282927270526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7211f0c38893b%3A0x953be75633484a17!2sS%C3%BAper%20Gil!5e0!3m2!1ses!2smx!4v1768624094224!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.app.goo.gl/a6S67aHPMffRfQ5T8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2
             px-4 py-2 rounded-full
             bg-[#3a3a3a] text-white text-xs shadow-sm
             hover:shadow-md
             transition
             font-alata"
                >
                  Abrir en Google Maps
                </a>
              </div>


            </section>
            <a
              href={`https://wa.me/529514967431?text=${mensajeWhats}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
             px-6 py-4 rounded-full
             bg-[#fae7bb]
             text-black text-sm tracking-wide
             shadow-sm
             hover:shadow-md
             transition
             font-alata"
            >
              Confirmar asistencia
            </a>



          </main>

        )}
      </div>
    </div>
  )
}

export default App
