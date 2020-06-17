**Obtener ordenes**
----
  Obtener todas las ordenes.

* **URL**

  /api/ordenes/

* **Method:**

  `GET`

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Array ordenes existentes
    [
        {
            "_id": "5e83aa951b68007089e2b202",
            mesaId: "1",
            descripcion: "milanesa napolitana",
            precio: "300,00",
            estado: 'abierta'
            "createdAt": "2020-03-31T20:39:49.619Z",
            "updatedAt": "2020-03-31T20:39:49.619Z",
            "__v": 0
        }
    ]
    ```

* **Error Response:**

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al obtener Ordenes." }`

---
<br />

**Obtener una orden**
----
  Obtener una orden por ID.

* **URL**

  /api/ordenes/:ordenId

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  `ordenId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Orden solicitada
      {
          "_id": "5e83aa951b68007089e2b202",
          mesaId: "1",
          descripcion: "milanesa napolitana",
          precio: "300,00",
          estado: 'abierta'
          "createdAt": "2020-03-31T20:39:49.619Z",
          "updatedAt": "2020-03-31T20:39:49.619Z",
          "__v": 0
      }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: ordenId " }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Orden con ordenId :ordenId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Error al obtener Orden con ordenId :ordenId" }`

---
<br />

**Crear una orden**
----
  Crear un  nuevo objeto orden

* **URL**

  /api/ordenes/

* **Method:**

  `POST`

* **URL Params**

  None

* **Data Params**

  **Required:**

  `mesaId=[string]` <br />
  `descripcion=[string]` <br />
  `precio=[string]` <br />
  `estado=[string]`

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Orden creada
      {
          "_id": "5e83aa951b68007089e2b202",
          mesaId: "1",
          descripcion: "milanesa napolitana",
          precio: "300,00",
          estado: 'abierta'
          "createdAt": "2020-03-31T20:39:49.619Z",
          "updatedAt": "2020-03-31T20:39:49.619Z",
          "__v": 0
      }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Faltan parametros." }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message : "No se encontro Mesa con mesaId :mesaId" }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al crear una Orden." }`

---
<br />

**Actualizar una orden**
----
  Actualizar un objeto orden

* **URL**

  /api/ordenes/:ordenId

* **Method:**

  `PATCH`

* **URL Params**

  **Required:**

  `ordenId=[string]`

* **Data Params**

  **Optional:**

  `mesaId=[string]` <br />
  `descripcion=[string]` <br />
  `precio=[string]` <br />
  `estado=[string]`

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Orden actualizada
      {
          "_id": "5e83aa951b68007089e2b202",
          mesaId: "1",
          descripcion: "milanesa napolitana",
          precio: "300,00",
          estado: 'abierta'
          "createdAt": "2020-03-31T20:39:49.619Z",
          "updatedAt": "2020-03-31T20:39:49.619Z",
          "__v": 0
      }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: ordenId." }`

  OR

  * **Code:** `404 NOT FOUND` <br />
  **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`
  **Content:** `{ message: "No se encontro Orden con ordenId :ordenId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al actualizar Orden con ordenId :ordenId" }`

---
<br />

**Eliminar una orden**
----
  Elimina una orden por ID

* **URL**

  /api/ordenes/:ordenId

* **Method:**

  `DELETE`

* **URL Params**

  **Required:**

  `ordenId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
  **Content:** `{ message: "Orden eliminada con exito" }`

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: ordenId." }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Orden con ordenId :ordenId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al eliminar Orden con ordenId :ordenId" }`
