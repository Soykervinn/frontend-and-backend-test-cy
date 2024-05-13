Frontend and Backend Testing using Cypress Integrated with Cucumber. 

Herramienta de Automatizacion: Cypress V13.6

GitHub CI: Se deja en la carpeta .github la config para levantar Integracion Continua en este proyecto de pruebas. 

Cypress Cloud: Se levanta Dashboard de este proyecto de pruebas en Cypress Cloud. Una vez en el repo, ejecutar en la terminal 
            npx cypress run --record --key 40cf5c97-2b26-484a-a651-70530113c000

Estructura del Proyecto: 

- .github: En este directorio se encuentran los workflows definidos para la implementacion de CI en una segunda etapa de este proyecto.
El objetivo es poder tener una ejecucion automatica con cada deployment, basado en una estrategia de Countinious Integration y Countinious Testing. 

- cypres: En este directorio se encuentra el codigo y los escenarios de los test, dentro de una folder llamada integration. Se organizan de la siguiente manera: 
    
        - APITesting: Se creó una carpeta llamada PetStoreService para el servicio https://petstore.swagger.io. 
        Esto para hacerlo mas escalabre y mantenible, de modo que si se suman otros servicios a este repo, se creen carpetas para cada API. 

        - E2ETesting: En este directorio se encuentra una folder llamada sauceDemoPage, siguiendo la misma logica anterior.
        Si se suman otras UI a este repo, crear una carperta para ello. 

- screenshots: En este directorio encontraran las evidence de cada run que se ejecute. 

- support: En este directorio no encontramos ningun archivo que estemos invocando actualmente.
En este directorio podrian sumarse services o requests compartidas por cualquiera de las carpetas del repo, esto con la finalidad de hacer escalable el proyecto.

- Finalmente encontrarán los archivos informacionales: 

        - bugReporting.txt: contiene el bug reporting detectado en el servicio petStore de API Testing. 
        - conclusiones.txt: Contiene las concluciones de los tests, hayazgos y consideraciones finales. 
        - readme.txt. 

Ejecución de Pruebas: 

        - Ejecucion en la UI de Cypress: npx cypress open
        - Ejecucion en terminal: npx cypress run
        - Dashboard Cypress Cloud: 
            - Ejecutar las pruebas con el comando npx cypress run --record --key 40cf5c97-2b26-484a-a651-70530113c000
            - Ir a el Dashboard de este Proyecto en  Cypress Cloud: https://cloud.cypress.io/projects/7gxiqv/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

 
