**Obtener mesas**
----
  Obtener todas las mesas.

* **URL**

  /api/mesas/

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
    Array mesas existentes
    [
        {
            "_id": "5e83aa951b68007089e2b202",
            "mesaId": "1",
            "descripcion": "mesa patio 1",
            "createdAt": "2020-03-31T20:39:49.619Z",
            "updatedAt": "2020-03-31T20:39:49.619Z",
            "__v": 0
        }
    ]
    ```

* **Error Response:**

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al obtener Mesas." }`

---
<br />

**Obtener una mesa**
----
  Obtener una mesa por ID.

* **URL**

  /api/mesas/:mesaId

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Mesa solicitada
      {
          "_id": "5e83aa951b68007089e2b202",
          "mesaId": "1",
          "descripcion": "mesa patio 1",
          "createdAt": "2020-03-31T20:39:49.619Z",
          "updatedAt": "2020-03-31T20:39:49.619Z",
          "__v": 0
      }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: param name " }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Error al obtener Mesa con mesaId :mesaId" }`

---
<br />

**Crear una mesa**
----
  Crear un  nuevo objeto mesa

* **URL**

  /api/mesas/

* **Method:**

  `POST`

* **URL Params**

  None

* **Data Params**

  **Required:**

  `mesaId=[string]` <br />
  `descripcion=[string]`

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Mesa creada
      {
          "_id": "5e83aa951b68007089e2b202",
          "mesaId": "1",
          "descripcion": "mesa patio 1",
          "createdAt": "2020-03-31T20:39:49.619Z",
          "updatedAt": "2020-03-31T20:39:49.619Z",
          "__v": 0
      }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: param name " }`

  OR

  * **Code:** `409 CONFLICT` <br />
    **Content:** `{ message : "MesaId ya en uso" }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al crear una Mesa." }`

---
<br />

**Actualizar una mesa**
----
  Actualizar la descripcion de objeto mesa

* **URL**

  /api/mesas/:mesaId

* **Method:**

  `PUT`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  **Required:**

  `descripcion=[string]`

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Mesa actualizada
      {
          "_id": "5e83aa951b68007089e2b202",
          "mesaId": "1",
          "descripcion": "mesa patio 1",
          "createdAt": "2020-03-31T20:39:49.619Z",
          "updatedAt": "2020-03-31T20:39:49.619Z",
          "__v": 0
      }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: param name " }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al actualizar Mesa con mesaId :mesaId" }`

---
<br />

**Eliminar una mesa**
----
  Elimina una mesa por ID

* **URL**

  /api/mesas/:mesaId

* **Method:**

  `DELETE`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
  **Content:** `{ message: "Mesa eliminada con exito" }`

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: mesaId " }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al eliminar Mesa con mesaId :mesaId" }`

---
<br />

**Obtener ordenes abiertas**
----
  Obtener ordenes abiertas para mesa por ID

* **URL**

  /api/mesas/:mesaId/ordenes-abiertas

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    Array ordenes abiertas para mesa por ID
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

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: mesaId " }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al obtener Ordenes abiertas con mesa :mesaId." }`

---
<br />

**Cerrar mesa**
----
  Actualiza ordenes de estado "abierta" a estado "cerrada" para mesa por ID
  Devuelve las ordenes cerradas

* **URL**

  /api/mesas/:mesaId/ordenes-abiertas

* **Method:**

  `PUT`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS` <br />
    **Content:**
    ```
    ordenes: Array ordenes actualizadas a cerrada para mesa por ID
    total: Monto total de la suma de las ordenes
    {
        ordenes: [
            {
              "_id": "5e83aa951b68007089e2b202",
              mesaId: "1",
              descripcion: "milanesa napolitana",
              precio: "300,00",
              estado: 'cerrada'
              "createdAt": "2020-03-31T20:39:49.619Z",
              "updatedAt": "2020-03-31T20:39:49.619Z",
              "__v": 0
            }
        ],
        total: "46:00"
    }
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST` <br />
    **Content:** `{ message: "Parametro faltante: mesaId " }`

  OR

  * **Code:** `404 NOT FOUND` <br />
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR` <br />
    **Content:** `{ message : "Ocurrió un error al cerrar mesa con mesa :mesaId." }`
