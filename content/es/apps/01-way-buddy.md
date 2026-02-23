---
slug: way-buddy
order: 1
name: Owli-AI Way-Buddy
platform: Android
status: Prototype
tagline: Asistente digital de orientacion para rutas mas seguras en la vida diaria.
valueProp: Detecta caminos transitables y ofrece indicaciones acusticas de direccion directamente en tu smartphone.
audience: Ciego, baja vision
cloud: optional
features:
  - title: Deteccion de caminos transitables
    description: La app analiza la imagen de camara y detecta zonas clasificadas como seguras para caminar.
  - title: Estimacion de direccion en tiempo real
    description: A partir del area transitable detectada se calcula una direccion recomendada de movimiento.
  - title: Retroalimentacion estereo acustica
    description: Una senal de audio diferenciada izquierda/derecha ofrece indicaciones para la direccion de movimiento optima.
  - title: Procesamiento en el dispositivo
    description: El analisis de imagen se realiza directamente en el smartphone y no se envian imagenes de camara a servidores.
  - title: Modo de entrenamiento para recopilacion de datos
    description: De forma opcional, se pueden guardar localmente datos de imagen y mascara para generar datos de entrenamiento y mejorar modelos.
  - title: Modo de desarrollo y analisis
    description: Visualizaciones e informacion de depuracion permiten una vista transparente de las predicciones del modelo.
privacy:
  mode: hybrid
  summary: El procesamiento de imagen se realiza completamente en el dispositivo. No se transfieren datos de camara a servidores externos.
  note: Los datos de entrenamiento guardados permanecen localmente en tu smartphone.
requirements:
  - Android 10 o superior
  - Acceso a camara
  - Internet opcional para futuras funciones cloud
icon:
  src: /apps/way-buddy/icon-512-transparent.webp
  alt: Icono de Owli-AI Way-Buddy
  width: 512
  height: 512
logo:
  src: /apps/way-buddy/logo-1024-transparent.webp
  alt: Logo de Owli-AI Way-Buddy
  width: 1024
  height: 1024
links:
  primary:
    label: Probar Way-Buddy
    href: /support
  secondary:
    label: Contactar soporte
    href: /support
media:
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: Icono de la app Owli-AI Way-Buddy
    caption: Marcador de posicion del icono de la app
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: Vista de ejemplo de Owli-AI Way-Buddy con deteccion de camino y orientacion por audio
    caption: Marcador de posicion de vista previa de interfaz
seo:
  title: App de orientacion con deteccion de caminos transitables y audio
  description: Owli-AI Way-Buddy es una app de orientacion para Android que puede detectar caminos transitables y apoyar la navegacion de personas con discapacidad visual mediante audio.
  keywords:
    - App de orientacion
    - Deteccion de caminos transitables
    - Navegacion para discapacidad visual
    - Retroalimentacion por audio
translationStatus: machine
sourceLang: de
---

## Para quien es Owli-AI Way-Buddy?

Owli-AI Way-Buddy esta pensada para personas ciegas o con discapacidad visual que necesitan apoyo adicional de orientacion al caminar en exteriores. La app no sustituye un baston blanco ni un perro guia, pero puede servir como ayuda digital complementaria.

Si buscas una app de orientacion que detecte caminos transitables, Way-Buddy te ofrece indicaciones claras de direccion en tiempo real. El apoyo a la navegacion para discapacidad visual funciona mediante audio preciso y esta pensado como ayuda adicional para el dia a dia.

## Que hace la app exactamente?

Way-Buddy analiza la imagen en vivo de la camara del smartphone y detecta superficies transitables como aceras o zonas libres delante de ti. Con esa informacion calcula una direccion recomendada de movimiento.

En lugar de pistas visuales, recibes retroalimentacion acustica:
- Una senal estereo diferenciada te indica si debes orientarte mas hacia la izquierda o hacia la derecha.
- La intensidad o posicion del sonido aporta indicaciones adicionales de direccion.

## Como funciona Way-Buddy

1. **Orientar la camara**  
   El smartphone se orienta hacia delante para captar la zona frente a ti.

2. **Segmentacion de la escena**  
   Una red neuronal entrenada detecta superficies transitables en la imagen de camara.

3. **Calculo de direccion**  
   A partir del area transitable detectada se obtiene una direccion de movimiento estable.

4. **Respuesta acustica**  
   Por auriculares o altavoz recibes una senal diferenciada izquierda/derecha para orientarte.

## Modo de entrenamiento y de desarrollo

Way-Buddy incluye ademas un modo de entrenamiento en el que se pueden guardar localmente datos de imagen y mascara. Estos datos sirven para continuar desarrollando y mejorando los modelos base.

Un modo de desarrollo visualiza las predicciones del modelo directamente en pantalla y hace su funcionamiento transparente.

## Privacidad y procesamiento

El procesamiento de imagen se realiza totalmente en el dispositivo. No se transfieren datos de camara a servidores externos. Los datos de entrenamiento guardados permanecen localmente en tu smartphone.
