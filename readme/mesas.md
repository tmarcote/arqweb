**Obtener mesas**
----
  Obtener todas las mesas.

* **URL**

  /mesas/

* **Method:**

  `GET`

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS`
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

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Ocurrió un error al obtener Mesas." }`

<br />
---
<br />

**Obtener una mesa**
----
  Obtener una mesa por ID.

* **URL**

  /mesas/:mesaId

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS`
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

  * **Code:** `400 BAD REQUEST`
    **Content:** `{ message: "Parametro faltante: param name " }`

  OR

  * **Code:** `404 NOT FOUND`
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Error al obtener Mesa con mesaId :mesaId" }`

<br />
---
<br />

**Crear una mesa**
----
  Crear un  nuevo objeto mesa

* **URL**

  /mesas/

* **Method:**

  `POST`

* **URL Params**

  None

* **Data Params**

  **Required:**

  `mesaId=[string]`
  `descripcion=[string]`

* **Success Response:**

  * **Code:** `200 SUCCESS`
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

  * **Code:** `400 BAD REQUEST`
    **Content:** `{ message: "Parametro faltante: param name " }`

  OR

  * **Code:** `409 CONFLICT`
    **Content:** `{ message : "MesaId ya en uso" }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Ocurrió un error al crear una Mesa." }`

<br />
---
<br />

**Actualizar una mesa**
----
  Actualizar la descripcion de objeto mesa

* **URL**

  /mesas/:mesaId

* **Method:**

  `PUT`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  **Required:**

  `descripcion=[string]`

* **Success Response:**

  * **Code:** `200 SUCCESS`
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

  * **Code:** `400 BAD REQUEST`
    **Content:** `{ message: "Parametro faltante: param name " }`

  OR

  * **Code:** `404 NOT FOUND`
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Ocurrió un error al actualizar Mesa con mesaId :mesaId" }`

<br />
---
<br />

**Eliminar una mesa**
----
  Elimina una mesa por ID

* **URL**

  /mesas/:mesaId

* **Method:**

  `DELETE`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS`
  **Content:** `{ message: "Mesa eliminada con exito" }`

* **Error Response:**

  * **Code:** `400 BAD REQUEST`
    **Content:** `{ message: "Parametro faltante: mesaId " }`

  OR

  * **Code:** `404 NOT FOUND`
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Ocurrió un error al eliminar Mesa con mesaId :mesaId" }`

<br />
---
<br />

**Obtener ordenes abiertas**
----
  Obtener ordenes abiertas para mesa por ID

* **URL**

  /mesas/:mesaId/ordenes-abiertas

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS`
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

  * **Code:** `400 BAD REQUEST`
    **Content:** `{ message: "Parametro faltante: mesaId " }`

  OR

  * **Code:** `404 NOT FOUND`
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Ocurrió un error al obtener Ordenes abiertas con mesa :mesaId." }`

<br />
---
<br />

**Cerrar mesa**
----
  Actualiza ordenes de estado "abierta" a estado "cerrada" para mesa por ID
  Devuelve las ordenes cerradas

* **URL**

  /mesas/:mesaId/ordenes-abiertas

* **Method:**

  `PUT`

* **URL Params**

  **Required:**

  `mesaId=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** `200 SUCCESS`
    **Content:**
    ```
    Array ordenes actualizadas a cerrada para mesa por ID
    [
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
    ]
    ```

* **Error Response:**

  * **Code:** `400 BAD REQUEST`
    **Content:** `{ message: "Parametro faltante: mesaId " }`

  OR

  * **Code:** `404 NOT FOUND`
    **Content:** `{ message: "No se encontro Mesa con mesaId :mesaId " }`

  OR

  * **Code:** `500 INTERNAL SERVER ERROR`
    **Content:** `{ message : "Ocurrió un error al cerrar mesa con mesa :mesaId." }`
