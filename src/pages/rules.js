import '../assets/styles/rules.css'

const Rules = () => {
    return (
        <div id='rules-page'>
            <h1>Wander</h1>

            <h2>Cómo jugar</h2>
            <p>
                El maestro del juego facilita una historia de peligro y aventura. Cuando intentes hacer algo arriesgado,
                elige la estadística que aplique (músculo, agilidad, cerebro, encanto), lanza una moneda y una moneda
                adicional por cada caja rellenada. Si es cabeza (Número), pasas. Si es cola (Escudo) fallas, y el maestro
                del juego haceque algo malo pase. Si estas actuando de acuerdo a una habilidad, lanza una moneda extra.
            </p>
            <p>
                Cuando estes en peligro, perder 1 HP es un corte o moretón, 2 HP es una herida profunda y 3 HP es una herida
                seria. Para causar daño, 1 + músculo para combate cuerpo a cuerpo, 1 + agilidad para combate a distancia.
                Cuando pierdes todos tus HP, lanza una moneda. Si es cabeza (Número), te desmayas. Si es cola (Escudo),
                mueres...
            </p>
            <h2>Crear un personaje</h2>
            <p>
                Llena 2 cajas en la sección de estadísticas, crea una creencia principal y ¡elige una habilidad!
                Tu HP inicial es 5 + el número de cajas rellenadas en músculo y agilidad.
            </p>
            <p>
                Luego, introduce tu personaje rellenando los espacios en blanco: "Mi nombre es <span className="blank">nombre</span>,
                y soy de <span className="blank">hogar</span>. Cuando la gente me ve por primera vez, lo primero que notan
                es <span className="blank">apariencia y objetos</span>. Soy muy buen@ con <span className="blank">habilidad</span> y
                mi <span className="blank">mejor estadística</span>. Y de verdad creo <span className="blank">creencia principal</span>".
            </p>
            <h2>Usar XP</h2>
            
            <section id='xp'>
                <p>
                    Ganas 1 XP por cada acción fallada, 1 al final de una sesión y 1 por cada decisión difícil de acuerdo a tu
                    creencia principal. Puedes utilizar tus XP de las siguientes maneras:
                </p>
                <div>
                    <p>
                        <strong>3 XP</strong> - Convertir un lanzamiento fallido a un resultado mixto.
                    </p>
                    <p>
                        <strong>5 XP</strong> - Convertir un lanzamiento fallido a uno exitoso.
                    </p>
                    <p>
                        <strong>7 XP</strong> - Rellenar una nueva caja de estadistica o elegir una nueva habilidad.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Rules