# Instalacion
Corre `npm install` y luego `npx tsx index.ts`
# Arquitectura
El programa consiste de 3 archivos para mantener la separacion de intereses ("separation of concerns")
Igualmente la clase vehiculo hace uso de una logica orientada a objetos (OOP)
Los archivos y sus funciones son:
- `index.ts`: Archivo principal que inicia el aplicativo y define los comandos disponibles
- `vehicle.ts`: Archivo que contiene la clase `Vehicle` que se encarga del movimiento y su logica.
- `cli-helper.ts`: Funcion de ayuda para recibir comandos a travez de la linea de comandos (CLI)