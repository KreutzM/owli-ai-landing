---
slug: assist
order: 2
name: Owli-AI Assist
platform: Android
status: Beta
tagline: Tu sistema de asistencia visual con apoyo de IA.
valueProp: Analiza escenas, haz preguntas y escucha respuestas con descripcion de imagen asistida por IA.
audience: Blind
cloud: yes
features:
  - title: Descripcion de escena con IA (Cloud Mode)
    description: Una imagen capturada por camara se envia a un modelo vision-language y se describe en lenguaje claro.
  - title: Preguntas de seguimiento
    description: Puedes hacer preguntas concretas sobre la escena actual, por ejemplo sobre texto, objetos o detalles de la imagen.
  - title: Auto-scan
    description: Si lo deseas, la app analiza nuevas imagenes a intervalos regulares y te mantiene informado continuamente sobre tu entorno.
  - title: Reconocimiento de voz y salida de voz en streaming
    description: Las preguntas pueden hacerse por voz. Las respuestas se reproducen en tiempo real mediante salida de voz.
  - title: Capturas adicionales para mas contexto
    description: Si hace falta, puedes tomar imagenes adicionales para analizar mejor los detalles.
  - title: Perfiles de asistencia personalizados
    description: Puedes definir como te habla tu asistente y en que debe centrarse, por ejemplo breve y preciso, muy detallado o con foco en seguridad.
  - title: Asistencia basada en contexto (modo automatico)
    description: La app analiza primero la situacion actual, por ejemplo compra, estacion, trafico o restaurante, y adapta automaticamente la descripcion para priorizar la informacion relevante.
privacy:
  mode: cloud
  summary: En Cloud Mode, las imagenes capturadas se transfieren al proveedor de IA configurado para describir la escena y responder preguntas.
  note: Solo se transfieren los datos necesarios para el analisis; el flujo exacto depende del proveedor y de la implementacion.
requirements:
  - Android 10 o superior
  - Camara y microfono
  - Conexion estable a internet para Cloud Mode
icon:
  src: /apps/assist/icon-512-transparent.webp
  alt: Icono de Owli-AI Assist
  width: 512
  height: 512
logo:
  src: /apps/assist/logo-1024-transparent.webp
  alt: Logo de Owli-AI Assist
  width: 1024
  height: 1024
links:
  primary:
    label: Probar Assist Cloud Mode
    href: /support
  secondary:
    label: Consultar privacidad
    href: /privacy#assist
media:
  - src: /apps/assist/icon-placeholder.svg
    alt: Icono de la app Owli-AI Assist
    caption: Icono de la app Assist
  - src: /apps/assist/icon-placeholder.svg
    alt: Vista de ejemplo de Owli-AI Assist en Cloud Mode con descripcion de escena
    caption: Marcador de posicion de vista Cloud Mode
seo:
  title: App de descripcion de imagen como asistencia visual con control por voz
  description: Owli-AI Assist es una app Android de descripcion de imagen que funciona como asistencia visual con descripcion de escena por IA, preguntas de seguimiento y control por voz en Cloud Mode.
  keywords:
    - App de descripcion de imagen
    - Asistencia visual
    - Descripcion de escena con IA
    - Control por voz
translationStatus: machine
sourceLang: de
---

## Para quien es Owli-AI Assist?

Owli-AI Assist esta dirigida a personas ciegas o con discapacidad visual severa que desean comprender mejor su entorno con ayuda de inteligencia artificial. La app no sustituye asistencia personal, pero puede aportar informacion adicional en muchas situaciones cotidianas.

Como app de descripcion de imagen, Assist ofrece asistencia visual que describe escenas de forma clara y responde a preguntas de seguimiento. La descripcion de escena con IA puede manejarse por voz para acceder a informacion de forma rapida y manos libres.

## Que hace la app exactamente?

Owli-AI Assist funciona como sistema de asistencia visual:

1. La camara captura la escena actual.
2. Se envia una imagen a un modelo de IA.
3. El modelo describe la escena en lenguaje claro.
4. Puedes hacer preguntas concretas de seguimiento.

Ejemplos:
- Que hay delante de mi?
- Leeme el texto del cartel.
- Que productos hay en la estanteria?
- Que aparece en la pantalla?

Las respuestas se ofrecen por salida de voz para que puedas mantener las manos libres.

## Auto-scan para informacion continua

En modo Auto-scan, la app analiza imagenes nuevas con regularidad. Asi puedes mantenerte informado sobre cambios en tu entorno sin activar manualmente cada analisis.

## Entrada y salida por voz

Las preguntas pueden hacerse por voz. Las respuestas se reproducen en tiempo real con salida de voz en streaming, de modo que descripciones largas no necesitan cargarse completas primero.

## Asistencia personalizada y basada en contexto

Owli-AI Assist permite usar distintos perfiles de asistencia. Puedes decidir si las descripciones deben ser breves y precisas o muy detalladas. Tambien se puede ajustar el foco del analisis, por ejemplo dando prioridad a obstaculos o informacion de texto.

En modo automatico, la app detecta situaciones cotidianas y prioriza la informacion mas relevante.

Ejemplos:

- En **trafico urbano** se destacan vehiculos, movimientos y semaforos.  
- En el **supermercado** se priorizan productos, estanterias e informacion de precios.  
- En **estaciones o paradas** se priorizan accesos, paneles e hitos de orientacion.  
- En un **restaurante o cafe** la asistencia se centra mas en personas, mesas o menus.

Asi recibes informacion optimizada para cada situacion sin tener que preguntar cada detalle de forma explicita.

## Deteccion on-device (opcional)

Un modo opcional de deteccion local podria reconocer objetos seleccionados directamente en el smartphone en una ampliacion futura. Este modo funcionaria sin internet y procesaria imagenes solo de forma local.

## Privacidad y procesamiento

En Cloud Mode, la imagen capturada se envia a un servicio externo de IA para analisis. Solo se transfieren los datos necesarios para el analisis.

El modo on-device opcional (si esta disponible) procesa los datos de imagen exclusivamente de forma local.
