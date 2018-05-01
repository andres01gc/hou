//cada uno de estos representa una pestaña
var categoria = {
  titulo: 'Información Básica',
  sub_categorias: []
};

//representa esos grupos que están dentro de cada pestaña
var sub_categoria = {
  sub_titulo: 'Identidad',
  items: []
};

var input_item = {
  tipo_item: 'input',
  type: 'text',//aqui puede ser number, date o text
  tam: 'm',
  placehoder: '',
  nombre: 'Nombre'
};

//linea horizontal que sirve como separador dentro de las subcategorias
var item_line = {
  tipo_item: 'line',
  tam: 'l'//SIEMPRE DEBE IR CON l
};

var item_select = {
  tipo_item: 'select',
  type: 'text',
  opciones: ['Hombre', 'Mujer', 'Otro'],
  nombre: 'Sexo',
  tam: 's'
};

var item_seleccion_multiple = {
  tipo_item: 'multiple',
  opciones: ['p1', 'p2', 'p3', 'p4'],
  nombre: 'Raza',
  tam: 'l'
};


//así es masomenos como va a quedar la estructura del condicional, se puede utilizar para maquetar, ya guarda en db, pero aún no logro tener la información de este al bajar la historia.
// TODO EN BETA
var item_condicional = {
  tipo_item: 'condicional',
  tam: 'l',//intocable, siempre debe ser l
  nombre: 'prueba',
  seleccionables: ['a', 'b', 'c', 'd', 'e'],
  condicionables: {
    a: [{
      tipo_item: 'input',
      type: 'text',
      tam: 'm',
      placehoder: '',
      nombre: 'Item a1!'
    }, {
      tipo_item: 'input',
      type: 'text',
      tam: 'm',
      placehoder: '',
      nombre: 'Item a2'
    }], b: [{
      tipo_item: 'input',
      type: 'text',
      tam: 'm',
      placehoder: '',
      nombre: 'Item b1!'
    }, {
      tipo_item: 'input',
      type: 'text',
      tam: 'm',
      placehoder: '',
      nombre: 'Item b2'
    }], c: [], d: [], e: []
  }
};
//______________________________________________________________ ITEMS ESPECIALES!

// puesto que existe componentess especiales para determinadas tareas, como el acumulados de numeros, o el odontograma,
// estos se hacen código y se utiliza la eestructura siguiente para invocarlos en el code.

var item_telefonos = {
  tipo_item: 'telefono',
  nombre: 'telefonos',
  tam: 'l'
};

//en beta, debo probar algunas cosas
var item_referencia = {
  tipo_item: 'referencia',
  nombre: 'referencia',
  tam: 'l'//intocable
};

var categoria_odontograma = {
  titulo: 'Odontograma', sub_categorias: {}
};


//ESTRUCTURA DE EJEMPLO

var informacion_categorias = [
  {
    titulo: 'Información Básica',
    sub_categorias:
      [
        {
          sub_titulo: 'Identidad',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Nombre'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Apellidos'
            },
            {
              tipo_item: 'input',
              type: 'date',
              tam: 'm',
              placehoder: '',
              nombre: 'Nacimiento'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 's',
              placehoder: '',
              nombre: 'Lugar'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['CC', 'TI', 'NIT', 'PPT'],
              nombre: 'Tipo_doc',
              tam: 's'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 's',
              placehoder: '',
              nombre: 'Documento'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 's',
              placehoder: '',
              nombre: 'Expedida en'
            },
            {
              tipo_item: 'line',
              tam: 'l',

            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Hombre', 'Mujer', 'Otro'],
              nombre: 'Sexo',
              tam: 's'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['O+', 'O-', 'A+', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
              nombre: 'Rh',
              tam: 's'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Blanco', 'Meztillo', 'Criollo', 'Indigena'],
              nombre: 'prueba item multiple',
              tam: 's'
            }, {
              tipo_item: 'multiple',
              opciones: ['p1', 'p2', 'p3', 'p4'],
              nombre: 'Raza',
              tam: 'm'
            }, {
              tipo_item: 'condicional',
              tam: 'l',//intocable, siempre debe ser l
              nombre: 'prueba',
              seleccionables: ['a', 'b', 'c', 'd', 'e'],
              condicionables: {
                a: [{
                  tipo_item: 'input',
                  type: 'text',
                  tam: 'm',
                  placehoder: '',
                  nombre: 'Item a1!'
                }, {
                  tipo_item: 'input',
                  type: 'text',
                  tam: 'm',
                  placehoder: '',
                  nombre: 'Item a2'
                }], b: [{
                  tipo_item: 'input',
                  type: 'text',
                  tam: 'm',
                  placehoder: '',
                  nombre: 'Item b1!'
                }, {
                  tipo_item: 'input',
                  type: 'text',
                  tam: 'm',
                  placehoder: '',
                  nombre: 'Item b2'
                }], c: [], d: [], e: []
              }
            }
          ]
        },
        {
          sub_titulo: 'Contacto',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Correo electrónico'
            },
            {
              tipo_item: 'telefono',
              nombre: 'telefonos',
              tam: 'l'
            }
          ]
        },
        {
          sub_titulo: 'Información Personal',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Estrato'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
              nombre: 'Estado civil',
              tam: 's'
            }
          ]
        },
        {
          sub_titulo: 'Seguridad Social',
          items: [
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
              nombre: 'Plan de atención',
              tam: 'm'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
              nombre: 'EPS',
              tam: 's'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
              nombre: 'Tipo de vinculación',
              tam: 'm'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
              nombre: 'IPS',
              tam: 'm'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
              nombre: 'Régimen',
              tam: 'm'
            },
            {
              tipo_item: 'select',
              type: 'text',
              opciones: ['S', 'V', 'C', 'S', 'U'],
              nombre: 'Cooperativa',
              tam: 'm'
            }
          ]
        }
      ]
  },
  {
    titulo: 'Odontograma', sub_categorias: {}
  },
  {
    titulo: 'Final',
    sub_categorias: [
      {
        sub_titulo: '',
        items: []
      }]
  }
];

