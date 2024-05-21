 const Preguntas = ()=>{
    return (
        <section className="mx-100 w-[100%] mb-12 grid grid-cols-1 place-items-center py-8 ">
            <div className=" text-center py-4 px-4 w-[100%] ">
                <h1 className="text-white text-4xl font-poppins font-semibold mb-8 leading-[50px]">Preguntas Frecuentes</h1>
                <details className="mt-8 text-left px-4 border border-gray-400 rounded p-2">
                    <summary className="text-white font-poppins cursor-pointer font-bold text-xl"> ¿El libro es físico o digital?</summary>
                    <p className=" pt-4 text-gray-300 font-poppins leading-6">El ebook <strong>SEDUCCÓN PROHIBIDA</strong> es digital y viene en formato PDF. Este puede ser descargado desde cualquier dispositivo, celular, computadora o tablet. No se encuentra en ninguna tienda física.</p>
                </details>
                <details className="mt-8 text-left px-4 border border-gray-400 rounded p-2">
                    <summary className="text-white font-poppins cursor-pointer font-bold text-xl"> ¿Cómo descargo el libro y los bonus después de haber comprado?</summary>
                    <p className=" pt-4 text-gray-300 font-poppins leading-6">El primer paso es abrir el correo que llegó a tu bandeja de entrada proveniente de <strong>Hotmart</strong>  (la plataforma que utilizamos para hacer entrega del material). En este correo se detalla paso a paso como descargar el libro. Son 3 simples pasos, de fácil entendimiento y ejecución. </p>
                </details>
                <details className="mt-8 text-left px-4 border border-gray-400 rounded p-2">
                    <summary className="text-white font-poppins cursor-pointer font-bold text-xl"> ¿Qué métodos de pago hay disponibles?</summary>
                    <p className=" pt-4 text-gray-300 font-poppins leading-6">Puedes pagar con <strong>Tarjeta de Crédito, PayPal y efectivo</strong>. Si estás en Colombia puedes pagar a través de <strong>Efecty o PSE</strong>. Si estás en México a través de  <strong>OXXO</strong>. Si estás en algún país de la Unión Europea a través de <strong>SEPA</strong>  y si estás en Chile  a través de <strong>Sencillito.</strong>  </p>
                </details>
                <details className="mt-8 text-left px-4 border border-gray-400 rounded p-2">
                    <summary className="text-white font-poppins cursor-pointer font-bold text-xl"> ¿Cómo es el proceso de compra?</summary>
                    <p className=" pt-4 text-gray-300 font-poppins leading-6">Una vez realices el pago a través de la plataforma recibes un correo electrónico con los datos de acceso para descargar inmediatamente en tus dispositivos el Ebook <strong>Seducción prohibida</strong>.</p>
                </details>
                <details className="mt-8 text-left px-4 border border-gray-400 rounded p-2">
                    <summary className="text-white font-poppins cursor-pointer font-bold text-xl"> Si tengo algún inconveniente, ¿Dónde puedo escribir?</summary>
                    <p className=" pt-4 text-gray-300 font-poppins leading-6">Puedes escribirnos al correo electrónico <strong className="text-lg">visionseduce@gmail.com</strong>  y allí resolveremos tus dudas o preguntas que tengas con la compra del ebook a la mayor brevedad posible.</p>
                </details>
               
            </div>
        </section>
    )
}

export default Preguntas