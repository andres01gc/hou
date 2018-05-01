import {Injectable} from '@angular/core';

@Injectable()
export class SupportDataService {
  // proporcionado via github ♥ https://github.com/marcovega/colombia-json/blob/master/colombia.min.json
  departamentos = [{'id': 0, 'departamento': 'Amazonas', 'ciudades': ['Leticia', 'Puerto Nariño']}, {
    'id': 1,
    'departamento': 'Antioquia',
    'ciudades': ['Abejorral', 'Abriaquí', 'Alejandría', 'Amagá', 'Amalfi', 'Andes', 'Angelópolis', 'Angostura',
      'Anorí', 'Anzá', 'Apartadó', 'Arboletes', 'Argelia', 'Armenia', 'Barbosa', 'Bello', 'Belmira', 'Betania', 'Betulia',
      'Briceño', 'Buriticá', 'Cáceres', 'Caicedo', 'Caldas', 'Campamento', 'Cañasgordas', 'Caracolí', 'Caramanta',
      'Carepa', 'Carolina del Príncipe', 'Caucasia', 'Chigorodó', 'Cisneros', 'Ciudad Bolívar', 'Cocorná',
      'Concepción', 'Concordia', 'Copacabana', 'Dabeiba', 'Donmatías', 'Ebéjico', 'El Bagre', 'El Carmen de Viboral',
      'El Peñol', 'El Retiro', 'El Santuario', 'Entrerríos', 'Envigado', 'Fredonia', 'Frontino', 'Giraldo', 'Girardota',
      'Gómez Plata', 'Granada', 'Guadalupe', 'Guarne', 'Guatapé', 'Heliconia', 'Hispania', 'Itagócí', 'Ituango',
      'Jardín', 'Jericó', 'La Ceja', 'La Estrella', 'La Pintada', 'La Unión', 'Liborina', 'Maceo', 'Marinilla',
      'Medellín', 'Montebello', 'Murindó', 'Mutatá', 'Nariño', 'Nechí', 'Necoclí', 'Olaya',
      'Peque', 'Pueblorrico', 'Puerto Berrío', 'Puerto Nare', 'Puerto Triunfo', 'Remedios', 'Rionegro', 'Sabanalarga',
      'Sabaneta', 'Salgar', 'San Andrés de Cuerquia', 'San Carlos', 'San Francisco', 'San Jerónimo',
      'San José de la Montaña', 'San Juan de Urabá', 'San Luis', 'San Pedro de Urabá', 'San Pedro de los Milagros',
      'San Rafael', 'San Roque', 'San Vicente', 'Santa Bárbara', 'Santa Fe de Antioquia', 'Santa Rosa de Osos', 'Santo Domingo',
      'Segovia', 'Sonsón', 'Sopetrán', 'Támesis', 'Tarazá', 'Tarso', 'Titiribí', 'Toledo', 'Turbo', 'Uramita',
      'Urrao', 'Valdivia', 'Valparaíso', 'Vegachí', 'Venecia', 'Vigía del Fuerte', 'Yalí', 'Yarumal', 'Yolombó',
      'Yondó', 'Zaragoza']
  }, {
    'id': 2,
    'departamento': 'Arauca',
    'ciudades': ['Arauca', 'Arauquita', 'Cravo Norte', 'Fortul', 'Puerto Rondón', 'Saravena', 'Tame']
  }, {
    'id': 3,
    'departamento': 'Atlántico',
    'ciudades': ['Baranoa', 'Barranquilla', 'Campo de la Cruz', 'Candelaria', 'Galapa', 'Juan de Acosta', 'Luruaco', 'Malambo',
      'Manatí', 'Palmar de Varela', 'Piojó', 'Polonuevo', 'Ponedera', 'Puerto Colombia', 'Repelón', 'Sabanagrande',
      'Sabanalarga', 'Santa Lucía', 'Santo Tomás', 'Soledad', 'Suán', 'Tubará', 'Usiacurí']
  }, {
    'id': 4,
    'departamento': 'Bolívar',
    'ciudades': ['Achí', 'Altos del Rosario', 'Arenal', 'Arjona', 'Arroyohondo', 'Barranco de Loba', 'Brazuelo de Papayal',
      'Calamar', 'Cantagallo', 'Cartagena de Indias', 'Cicuco', 'Clemencia', 'Córdoba', 'El Carmen de Bolívar', 'El Guamo',
      'El Peñón', 'Hatillo de Loba', 'Magangué', 'Mahates', 'Margarita', 'María la Baja', 'Mompós', 'Montecristo', 'Morales',
      'Norosí', 'Pinillos', 'Regidor', 'Río Viejo', 'San Cristóbal', 'San Estanislao', 'San Fernando', 'San Jacinto del Cauca',
      'San Jacinto', 'San Juan Nepomuceno', 'San Martín de Loba', 'San Pablo', 'Santa Catalina', 'Santa Rosa', 'Santa Rosa del Sur',
      'Simití', 'Soplaviento', 'Talaigua Nuevo', 'Tiquisio', 'Turbaco', 'Turbaná', 'Villanueva', 'Zambrano']
  }, {

    'id': 5,
    'departamento': 'Boyacá',
    'ciudades': ['Almeida', 'Aquitania', 'Arcabuco', 'Belén', 'Berbeo', 'Betéitiva', 'Boavita', 'Boyacá', 'Briceño',
      'Buenavista', 'Busbanzá', 'Caldas', 'Campohermoso', 'Cerinza', 'Chinavita', 'Chiquinquirá', 'Chíquiza', 'Chiscas', 'Chita',
      'Chitaraque', 'Chivatá', 'Chivor', 'Ciénega', 'Cómbita', 'Coper', 'Corrales', 'Covarachía', 'Cubará', 'Cucaita', 'Cuítiva',
      'Duitama', 'El Cocuy', 'El Espino', 'Firavitoba', 'Floresta', 'Gachantivá', 'Gámeza', 'Garagoa', 'Guacamayas', 'Guateque',
      'Guayatá', 'Gócicán', 'Iza', 'Jenesano', 'Jericó', 'La Capilla', 'La Uvita', 'La Victoria', 'Labranzagrande', 'Macanal',
      'Maripí', 'Miraflores', 'Mongua', 'Monguí', 'Moniquirá', 'Motavita', 'Muzo', 'Nobsa', 'Nuevo Colón', 'Oicatá', 'Otanche',
      'Pachavita', 'Páez', 'Paipa', 'Pajarito', 'Panqueba', 'Pauna', 'Paya', 'Paz del Río', 'Pesca', 'Pisba', 'Puerto Boyacá',
      'Quípama', 'Ramiriquí', 'Ráquira', 'Rondón', 'Saboyá', 'Sáchica', 'Samacá', 'San Eduardo', 'San José de Pare', 'San Luis de Gaceno',
      'San Mateo', 'San Miguel de Sema', 'San Pablo de Borbur', 'Santa María', 'Santa Rosa de Viterbo', 'Santa Sofía', 'Santana',
      'Sativanorte', 'Sativasur', 'Siachoque', 'Soatá', 'Socha', 'Socotá', 'Sogamoso', 'Somondoco', 'Sora', 'Soracá', 'Sotaquirá',
      'Susacón', 'Sutamarchán', 'Sutatenza', 'Tasco', 'Tenza', 'Tibaná', 'Tibasosa', 'Tinjacá', 'Tipacoque', 'Toca', 'Togócí',
      'Tópaga', 'Tota', 'Tunja', 'Tununguá', 'Turmequé', 'Tuta', 'Tutazá', 'Úmbita', 'Ventaquemada', 'Villa de Leyva',
      'Viracachá', 'Zetaquira']
  }, {
    'id': 6,
    'departamento': 'Caldas',
    'ciudades': ['Aguadas', 'Anserma', 'Aranzazu', 'Belalcázar', 'Chinchiná', 'Filadelfia', 'La Dorada', 'La Merced',
      'Manizales', 'Manzanares', 'Marmato', 'Marquetalia', 'Marulanda', 'Neira', 'Norcasia', 'Pácora', 'Palestina', 'Pensilvania',
      'Riosucio', 'Risaralda', 'Salamina', 'Samaná', 'San José', 'Supía', 'Victoria', 'Villamaría', 'Viterbo']
  }, {
    'id': 7,
    'departamento': 'Caquetá',
    'ciudades': ['Albania', 'Belén de los Andaquíes', 'Cartagena del Chairá', 'Curillo', 'El Doncello', 'El Paujil',
      'Florencia', 'La Montañita', 'Milán', 'Morelia', 'Puerto Rico', 'San José del Fragua', 'San Vicente del Caguán',
      'Solano', 'Solita', 'Valparaíso']
  }, {
    'id': 8,
    'departamento': 'Casanare',
    'ciudades': ['Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué',
      'Paz de Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'Sácama', 'San Luis de Palenque', 'Támara', 'Tauramena',
      'Trinidad', 'Villanueva', 'Yopal']
  }, {
    'id': 9,
    'departamento': 'Cauca',
    'ciudades': ['Almaguer', 'Argelia', 'Balboa', 'Bolívar', 'Buenos Aires', 'Cajibío', 'Caldono', 'Caloto', 'Corinto',
      'El Tambo', 'Florencia', 'Guachené', 'Guapí', 'Inzá', 'Jambaló', 'La Sierra', 'La Vega', 'López de Micay',
      'Mercaderes', 'Miranda', 'Morales', 'Padilla', 'Páez', 'Patía', 'Piamonte', 'Piendamó', 'Popayán',
      'Puerto Tejada', 'Puracé', 'Rosas', 'San Sebastián', 'Santa Rosa', 'Santander de Quilichao', 'Silvia', 'Sotará',
      'Suárez', 'Sucre', 'Timbío', 'Timbiquí', 'Toribío', 'Totoró', 'Villa Rica']
  }, {
    'id': 10,
    'departamento': 'Cesar',
    'ciudades': ['Aguachica', 'Agustín Codazzi', 'Astrea', 'Becerril', 'Bosconia', 'Chimichagua', 'Chiriguaná',
      'Curumaní', 'El Copey', 'El Paso', 'Gamarra', 'González', 'La Gloria (Cesar)', 'La Jagua de Ibirico', 'La Paz',
      'Manaure Balcón del Cesar', 'Pailitas', 'Pelaya', 'Pueblo Bello', 'Río de Oro', 'San Alberto', 'San Diego',
      'San Martín', 'Tamalameque', 'Valledupar']
  }, {
    'id': 11,
    'departamento': 'Chocó',
    'ciudades': ['Acandí', 'Alto Baudó', 'Bagadó', 'Bahía Solano', 'Bajo Baudó', 'Bojayá',
      'Cantón de San Pablo', 'Cértegui', 'Condoto', 'El Atrato', 'El Carmen de Atrato', 'El Carmen del Darién',
      'Istmina', 'Juradó', 'Litoral de San Juan', 'Lloró', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan',
      'Nóvita', 'Nuquí', 'Quibdó', 'Río Iró', 'Río Quito', 'Riosucio', 'San José del Palmar',
      'Sipí', 'Tadó', 'Unión Panamericana', 'Unguía']
  }, {
    'id': 12,
    'departamento': 'Cundinamarca',
    'ciudades': ['Agua de Dios', 'Albán', 'Anapoima', 'Anolaima', 'Apulo', 'Arbeláez', 'Beltrán', 'Bituima', 'Bogotá',
      'Bojacá', 'Cabrera', 'Cachipay', 'Cajicá', 'Caparrapí', 'Cáqueza', 'Carmen de Carupa', 'Chaguaní',
      'Chía', 'Chipaque', 'Choachí', 'Chocontá', 'Cogua', 'Cota', 'Cucunubá', 'El Colegio', 'El Peñón',
      'El Rosal', 'Facatativá', 'Fómeque', 'Fosca', 'Funza', 'Fóaquene', 'Fusagasugá', 'Gachalá',
      'Gachancipá', 'Gachetá', 'Gama', 'Girardot', 'Granada', 'Guachetá', 'Guaduas', 'Guasca', 'Guataquí',
      'Guatavita', 'Guayabal de Síquima', 'Guayabetal', 'Gutiérrez', 'Jerusalén', 'Junín', 'La Calera',
      'La Mesa', 'La Palma', 'La Peña', 'La Vega', 'Lenguazaque', 'Machetá', 'Madrid', 'Manta', 'Medina', 'Mosquera',
      'Nariño', 'Nemocón', 'Nilo', 'Nimaima', 'Nocaima', 'Pacho', 'Paime', 'Pandi', 'Paratebueno', 'Pasca',
      'Puerto Salgar', 'Pulí', 'Quebradanegra', 'Quetame', 'Quipile', 'Ricaurte', 'San Antonio del Tequendama',
      'San Bernardo', 'San Cayetano', 'San Francisco', 'San Juan de Rioseco', 'Sasaima', 'Sesquilé', 'Sibaté',
      'Silvania', 'Simijaca', 'Soacha', 'Sopó', 'Subachoque', 'Suesca', 'Supatá', 'Susa', 'Sutatausa', 'Tabio',
      'Tausa', 'Tena', 'Tenjo', 'Tibacuy', 'Tibirita', 'Tocaima', 'Tocancipá', 'Topaipí', 'Ubalá', 'Ubaque',
      'Ubaté', 'Une', 'Útica', 'Venecia', 'Vergara', 'Vianí', 'Villagómez', 'Villapinzón', 'Villeta',
      'Viotá', 'Yacopí', 'Zipacón', 'Zipaquirá']
  }, {
    'id': 13,
    'departamento': 'Córdoba',
    'ciudades': ['Ayapel', 'Buenavista', 'Canalete', 'Cereté', 'Chimá', 'Chinóa', 'Ciénaga de Oro',
      'Cotorra', 'La Apartada', 'Lorica', 'Los Córdobas', 'Momil', 'Montelíbano', 'Montería', 'Moñitos',
      'Planeta Rica', 'Pueblo Nuevo', 'Puerto Escondido', 'Puerto Libertador', 'Purísima', 'Sahagóan',
      'San Andrés de Sotavento', 'San Antero', 'San Bernardo del Viento', 'San Carlos', 'San José de Uré',
      'San Pelayo', 'Tierralta', 'Tuchín', 'Valencia']
  }, {'id': 14, 'departamento': 'Guainía', 'ciudades': ['Inírida']}, {
    'id': 15,
    'departamento': 'Guaviare',
    'ciudades': ['Calamar', 'El Retorno', 'Miraflores', 'San José del Guaviare']
  }, {
    'id': 16,
    'departamento': 'Huila',
    'ciudades': ['Acevedo', 'Agrado', 'Aipe', 'Algeciras', 'Altamira', 'Baraya', 'Campoalegre', 'Colombia', 'El Pital',
      'Elías', 'Garzón', 'Gigante', 'Guadalupe', 'Hobo', 'Íquira', 'Isnos', 'La Argentina', 'La Plata',
      'Nátaga', 'Neiva', 'Oporapa', 'Paicol', 'Palermo', 'Palestina', 'Pitalito', 'Rivera', 'Saladoblanco',
      'San Agustín', 'Santa María', 'Suaza', 'Tarqui', 'Tello', 'Teruel', 'Tesalia', 'Timaná', 'Villavieja', 'Yaguará']
  }, {
    'id': 17,
    'departamento': 'La Guajira',
    'ciudades': ['Albania', 'Barrancas', 'Dibulla', 'Distracción', 'El Molino', 'Fonseca', 'Hatonuevo',
      'La Jagua del Pilar', 'Maicao', 'Manaure', 'Riohacha', 'San Juan del Cesar', 'Uribia', 'Urumita', 'Villanueva']
  }, {
    'id': 18,
    'departamento': 'Magdalena',
    'ciudades': ['Algarrobo', 'Aracataca', 'Ariguaní', 'Cerro de San Antonio', 'Chibolo', 'Chibolo', 'Ciénaga',
      'Concordia', 'El Banco', 'El Piñón', 'El Retén', 'Fundación', 'Guamal', 'Nueva Granada', 'Pedraza',
      'Pijiño del Carmen', 'Pivijay', 'Plato', 'Pueblo Viejo', 'Remolino', 'Sabanas de San Ángel', 'Salamina',
      'San Sebastián de Buenavista', 'San Zenón', 'Santa Ana', 'Santa Bárbara de Pinto', 'Santa Marta', 'Sitionuevo',
      'Tenerife', 'Zapayán', 'Zona Bananera']
  }, {
    'id': 19,
    'departamento': 'Meta',
    'ciudades': ['Acacías', 'Barranca de Upía', 'Cabuyaro', 'Castilla la Nueva', 'Cubarral', 'Cumaral', 'El Calvario',
      'El Castillo', 'El Dorado', 'Fuente de Oro', 'Granada', 'Guamal', 'La Macarena', 'La Uribe', 'Lejanías', 'Mapiripán',
      'Mesetas', 'Puerto Concordia', 'Puerto Gaitán', 'Puerto Lleras', 'Puerto López', 'Puerto Rico', 'Restrepo',
      'San Carlos de Guaroa', 'San Juan de Arama', 'San Juanito', 'San Martín', 'Villavicencio', 'Vista Hermosa']
  }, {
    'id': 20,
    'departamento': 'Nariño',
    'ciudades': ['Aldana', 'Ancuyá', 'Arboleda', 'Barbacoas', 'Belén', 'Buesaco', 'Chachagócí', 'Colón',
      'Consacá', 'Contadero', 'Córdoba', 'Cuaspud', 'Cumbal', 'Cumbitara', 'El Charco', 'El Peñol', 'El Rosario',
      'El Tablón', 'El Tambo', 'Francisco Pizarro', 'Funes', 'Guachucal', 'Guaitarilla', 'Gualmatán', 'Iles', 'Imués',
      'Ipiales', 'La Cruz', 'La Florida', 'La Llanada', 'La Tola', 'La Unión', 'Leiva', 'Linares', 'Los Andes',
      'Magócí Payán', 'Mallama', 'Mosquera', 'Nariño', 'Olaya Herrera', 'Ospina', 'Pasto', 'Policarpa',
      'Potosí', 'Providencia', 'Puerres', 'Pupiales', 'Ricaurte', 'Roberto Payán', 'Samaniego', 'San Bernardo',
      'San José de Albán', 'San Lorenzo', 'San Pablo', 'San Pedro de Cartago', 'Sandoná', 'Santa Bárbara',
      'Santacruz', 'Sapuyes', 'Taminango', 'Tangua', 'Tumaco', 'Tóaquerres', 'Yacuanquer']
  }, {
    'id': 21,
    'departamento': 'Norte de Santander',
    'ciudades': ['Ábrego', 'Arboledas', 'Bochalema', 'Bucarasica', 'Cáchira', 'Cácota', 'Chinácota',
      'Chitagá', 'Convención', 'Cóacuta', 'Cucutilla', 'Duranía', 'El Carmen', 'El Tarra', 'El Zulia',
      'Gramalote', 'Hacarí', 'Herrán', 'La Esperanza', 'La Playa de Belén', 'Labateca', 'Los Patios', 'Lourdes',
      'Mutiscua', 'Ocaña', 'Pamplona', 'Pamplonita', 'Puerto Santander', 'Ragonvalia', 'Salazar de Las Palmas', 'San Calixto',
      'San Cayetano', 'Santiago', 'Santo Domingo de Silos', 'Sardinata', 'Teorama', 'Tibóa', 'Toledo', 'Villa Caro',
      'Villa del Rosario']
  }, {
    'id': 22,
    'departamento': 'Putumayo',
    'ciudades': ['Colón', 'Mocoa', 'Orito', 'Puerto Asís', 'Puerto Caicedo', 'Puerto Guzmán',
      'Puerto Leguízamo', 'San Francisco', 'San Miguel', 'Santiago', 'Sibundoy', 'Valle del Guamuez', 'Villagarzón']
  }, {
    'id': 23,
    'departamento': 'Quindío',
    'ciudades': ['Armenia', 'Buenavista', 'Calarcá', 'Circasia', 'Córdoba', 'Filandia', 'Génova',
      'La Tebaida', 'Montenegro', 'Pijao', 'Quimbaya', 'Salento']
  }, {
    'id': 24,
    'departamento': 'Risaralda',
    'ciudades': ['Apía', 'Balboa', 'Belén de Umbría', 'Dosquebradas', 'Guática', 'La Celia',
      'La Virginia', 'Marsella', 'Mistrató', 'Pereira', 'Pueblo Rico', 'Quinchía', 'Santa Rosa de Cabal', 'Santuario']
  }, {
    'id': 25,
    'departamento': 'San Andrés y Providencia',
    'ciudades': ['Providencia y Santa Catalina Islas', 'San Andrés']
  }, {
    'id': 26,
    'departamento': 'Santander',
    'ciudades': ['Aguada', 'Albania', 'Aratoca', 'Barbosa', 'Barichara', 'Barrancabermeja', 'Betulia', 'Bolívar',
      'Bucaramanga', 'Cabrera', 'California', 'Capitanejo', 'Carcasí', 'Cepitá', 'Cerrito', 'Charalá', 'Charta',
      'Chima', 'Chipatá', 'Cimitarra', 'Concepción', 'Confines', 'Contratación', 'Coromoro', 'Curití',
      'El Carmen de Chucurí', 'El Guacamayo', 'El Peñón', 'El Playón', 'El Socorro', 'Encino', 'Enciso',
      'Florián', 'Floridablanca', 'Galán', 'Gámbita', 'Girón', 'Guaca', 'Guadalupe', 'Guapotá',
      'Guavatá', 'Gócepsa', 'Hato', 'Jesóas María', 'Jordán', 'La Belleza', 'La Paz', 'Landázuri',
      'Lebrija', 'Los Santos', 'Macaravita', 'Málaga', 'Matanza', 'Mogotes', 'Molagavita', 'Ocamonte', 'Oiba', 'Onzaga',
      'Palmar', 'Palmas del Socorro', 'Páramo', 'Piedecuesta', 'Pinchote', 'Puente Nacional', 'Puerto Parra', 'Puerto Wilches',
      'Rionegro', 'Sabana de Torres', 'San Andrés', 'San Benito', 'San Gil', 'San Joaquín', 'San José de Miranda',
      'San Miguel', 'San Vicente de Chucurí', 'Santa Bárbara', 'Santa Helena del Opón', 'Simacota', 'Suaita', 'Sucre',
      'Suratá', 'Tona', 'Valle de San José', 'Vélez', 'Vetas', 'Villanueva', 'Zapatoca']
  }, {
    'id': 27,
    'departamento': 'Sucre',
    'ciudades': ['Buenavista', 'Caimito', 'Chalán', 'Colosó', 'Corozal', 'Coveñas', 'El Roble', 'Galeras',
      'Guaranda', 'La Unión', 'Los Palmitos', 'Majagual', 'Morroa', 'Ovejas', 'Sampués', 'San Antonio de Palmito',
      'San Benito Abad', 'San Juan de Betulia', 'San Marcos', 'San Onofre', 'San Pedro', 'Sincé', 'Sincelejo',
      'Sucre', 'Tolóa', 'Tolóa Viejo']
  }, {
    'id': 28,
    'departamento': 'Tolima',
    'ciudades': ['Alpujarra', 'Alvarado', 'Ambalema', 'Anzoátegui', 'Armero', 'Ataco', 'Cajamarca',
      'Carmen de Apicalá', 'Casabianca', 'Chaparral', 'Coello', 'Coyaima', 'Cunday', 'Dolores',
      'El Espinal', 'Falán', 'Flandes', 'Fresno', 'Guamo', 'Herveo', 'Honda', 'Ibagué',
      'Icononzo', 'Lérida', 'Líbano', 'Mariquita', 'Melgar', 'Murillo', 'Natagaima',
      'Ortega', 'Palocabildo', 'Piedras', 'Planadas', 'Prado', 'Purificación', 'Rioblanco',
      'Roncesvalles', 'Rovira', 'Saldaña', 'San Antonio', 'San Luis', 'Santa Isabel',
      'Suárez', 'Valle de San Juan', 'Venadillo', 'Villahermosa', 'Villarrica']
  }, {
    'id': 29,
    'departamento': 'Valle del Cauca',
    'ciudades': ['Alcalá', 'Andalucía', 'Ansermanuevo', 'Argelia', 'Bolívar', 'Buenaventura', 'Buga', 'Bugalagrande',
      'Caicedonia', 'Cali', 'Calima', 'Candelaria', 'Cartago', 'Dagua', 'El Águila', 'El Cairo', 'El Cerrito', 'El Dovio', 'Florida',
      'Ginebra', 'Guacarí', 'Jamundí', 'La Cumbre', 'La Unión', 'La Victoria', 'Obando', 'Palmira', 'Pradera',
      'Restrepo', 'Riofrío', 'Roldanillo', 'San Pedro', 'Sevilla', 'Toro', 'Trujillo', 'Tuluá', 'Ulloa', 'Versalles',
      'Vijes', 'Yotoco', 'Yumbo', 'Zarzal']
  }, {'id': 30, 'departamento': 'Vaupés', 'ciudades': ['Caruróa', 'Mitóa', 'Taraira']}, {
    'id': 31,
    'departamento': 'Vichada',
    'ciudades': ['Cumaribo', 'La Primavera', 'Puerto Carreño', 'Santa Rosalía']
  }];

  constructor() {
  }

}