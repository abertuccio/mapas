const csv = `PARTIDO,LOCALIDAD,BENEFICIARIOS
partido de ALMIRANTE BROWN,ADROGUE,  2.857 
partido de ALMIRANTE BROWN,Almirante Brown,  1.248 
partido de ALMIRANTE BROWN,BARRIO LOS ALAMOS,  50 
partido de ALMIRANTE BROWN,BARRIO ZABALA,  54 
partido de ALMIRANTE BROWN,BURZACO,  3.894 
partido de ALMIRANTE BROWN,GLEW,  3.440 
partido de ALMIRANTE BROWN,JOSE MARMOL,  95 
partido de ALMIRANTE BROWN,LONGCHAMPS,  1.401 
partido de ALMIRANTE BROWN,MINISTRO RIVADAVIA,  93 
partido de ALMIRANTE BROWN,RAFAEL CALZADA,  3.034 
partido de Avellaneda,Avellaneda,  3.238 
partido de Avellaneda,DOCK SUD MACIEL,  882 
partido de Avellaneda,GERLI,  261 
partido de Avellaneda,PI&EYRO,  333 
partido de Avellaneda,SARANDI,  747 
partido de Avellaneda,VILLA DOMINICO,  558 
partido de Avellaneda,VILLA HUE,  47 
partido de Avellaneda,VILLA POBLADORA,  56 
partido de Avellaneda,WILDE,  2.333 
partido de Berazategui,Berazategui,  8.922 
partido de Berazategui,CENTRO AGR. EL PATO,  812 
partido de Berazategui,J.M.GUTIERREZ,  15 
partido de Berazategui,LAS QUINTAS,  979 
partido de Berazategui,RANELAGH,  39 
partido de ESTEBAN ECHEVERRIA,BARRIO LINDO,  23 
partido de ESTEBAN ECHEVERRIA,EL JAGUEL,  79 
partido de ESTEBAN ECHEVERRIA,LUIS GUILLON,  562 
partido de ESTEBAN ECHEVERRIA,MERCEDES,  8 
partido de ESTEBAN ECHEVERRIA,MONTE GRANDE,  9.613 
partido de ESTEBAN ECHEVERRIA,MONTECARLO,  55 
partido de Ezeiza,Ezeiza,  4.442 
partido de Ezeiza,TRISTAN SUAREZ,  2.086 
partido de FLORENCIO VARELA,Florencio Varela,  18.416 
partido de Hurlingham,Hurlingham,  2.655 
partido de Hurlingham,VILLA TESEI,  1.226 
partido de Hurlingham,WILLIAM C. MORRIS,  308 
partido de Ituzaingó,Ituzaingó,  2.876 
partido de Ituzaingó,VILLA IRUPE,  63 
partido de Jose C. PAZ,JOSE C.PAZ,  12.694 
partido de Jose C. PAZ,PIANO S.A.,  557 
partido de La Matanza,ALDO BONZI,  374
partido de La Matanza,BARRIO SAN CARLOS,  92 
partido de La Matanza,C.GRAL.BELGRANO,  1.703 
partido de La Matanza,GONZALEZ CATAN,  13.740 
partido de La Matanza,ISIDRO CASANOVAS,  7.999 
partido de La Matanza,LAFERRERE,  10.941 
partido de La Matanza,LOMAS DEL MIRADOR,  1.149 
partido de La Matanza,RAFAEL CASTILLO,  2.236 
partido de La Matanza,RAMOS MEJIA,  848 
partido de La Matanza,RUTA 3-KILOMETRO 29,  501 
partido de La Matanza,SAN JUSTO,  6.575 
partido de La Matanza,TABLADA,  98 
partido de La Matanza,TAPIALES,  657 
partido de La Matanza,VILLA CELINA,  3.221 
partido de La Matanza,VILLA INSUPERABLE,  655 
partido de La Matanza,VILLA LUZURIAGA,  165 
partido de La Matanza,VILLA MADERO,  1.487 
partido de Lanús,GERLI,  668 
partido de Lanús,Lanús,  6.873 
partido de Lanús,MONTE CHINGOLO,  1.340 
partido de Lanús,REMEDIOS DE ESCALADA,  692 
partido de Lanús,VALENTIN ALSINA,  591 
partido de Lanús,VILLA DIAMANTE,  151  
partido de Lomas de Zamora,BANFIELD,  2.869 
partido de Lomas de Zamora,BARRIO SAN JOSE,  954 
partido de Lomas de Zamora,LAVALLOL,  786 
partido de Lomas de Zamora,Lomas de Zamora,  17.216 
partido de Lomas de Zamora,PARADA PASCO,  96 
partido de Lomas de Zamora,TEMPERLEY,  2.174 
partido de Lomas de Zamora,VILLA TURDERA,  291 
partido de Malvinas Argentinas,GRAND BOURG,  2.067 
partido de Malvinas Argentinas,ING.PABLO NOGUES,  200 
partido de Malvinas Argentinas,L.POLVORINES-M.DE.P,  3.795 
partido de Malvinas Argentinas,TORTUGUITAS,  2.532 
partido de Merlo,B.P.Departamento San Martín,  1.603 
partido de Merlo,LIBERTAD,  3.037 
partido de Merlo,LOS PARAISOS,  136 
partido de Merlo,MARIANO ACOSTA,  2.345 
partido de Merlo,Merlo,  10.618 
partido de Merlo,PONTEVEDRA,  2.235 
partido de Merlo,S.ANTONIO DE PADUA,  446 
partido de Moreno,Moreno,  19.546 
partido de Moreno,PASO DEL REY,  1.028 
partido de Morón,CASTELAR,  1.160 
partido de Morón,EL PALOMAR,  892 
partido de Morón,HAEDO,  335 
partido de Morón,Morón,  3.968 
partido de Quilmes,BARRIO FERROVIARIO,  303 
partido de Quilmes,BERNAL,  3.197 
partido de Quilmes,DON BOSCO,  29 
partido de Quilmes,Quilmes,  9.060 
partido de Quilmes,Quilmes OESTE,  164 
partido de Quilmes,S.F.SOLANO,  5.381 
partido de  San Fernando,CANAL Departamento San Fernando,  217 
partido de  San Fernando,Departamento San Fernando,  3.115 
partido de  San Fernando,VICTORIA,  151 
partido de  San Fernando,VIRREYES,  1.034 
partido de San Isidro,ACASSUSO,  50 
partido de San Isidro,BECCAR,  1.271 
partido de San Isidro,BOULOGNE,  1.812 
partido de San Isidro,BOULOGNE SUR MER,  26 
partido de San Isidro,MARTINEZ,  264 
partido de San Isidro,San Isidro,  824 
partido de San Isidro,VILLA ADELINA,  375 
partido de San Martín,C.LIB.G.Departamento San Martín,  4.295 
partido de San Martín,GENERAL Departamento San Martín,  49 
partido de San Martín,MIGUELETE,  63 
partido de San Martín,PABLO PODESTA,  37 
partido de San Martín,SAN ANDRES-V S.MART.,  186 
partido de San Martín,TROPEZON (PARADA),  53 
partido de San Martín,V.JOSE L.SUAREZ,  2.664 
partido de San Martín,VILLA BALLESTER,  1.505 
partido de San Martín,VILLA LOMA HERMOSA,  2.674 
partido de San Martín,VILLA LYNCH,  67 
partido de San Martín,VILLA MAIPU,  312 
partido de San Martín,VILLA ZAGALA,  16 
partido de San Miguel,BARRIO SANTA BRIGIDA,  358 
partido de San Miguel,BELLA VISTA,  2.298 
partido de San Miguel,CAMPO DE MAYO,  1 
partido de San Miguel,San Miguel,  8.261 
partido de San Miguel,VILLA MASIDE,  62 
partido de Tigre,BENAVIDEZ,  1.544 
partido de Tigre,DON TORCUATO,  2.912 
partido de Tigre,EL TALAR,  192 
partido de Tigre,GENERAL PACHECO,  4.752
partido de Tigre,Tigre,3450
partido de Tres de Febrero,CASEROS,2071
partido de Tres de Febrero,VILLA BOSCH,581
partido de Tres de Febrero,VILLA CIUDADELA,1390
partido de Tres de Febrero,VILLA J.INGENIEROS,724
partido de Tres de Febrero,VILLA M.CORONADO,14
partido de Tres de Febrero,VILLA STOS.LUGARES,122
partido de Vicente LOPEZ,ARIST DEL VALLE,23
partido de Vicente LOPEZ,CARAPACHAY,56
partido de Vicente LOPEZ,EST.A.DEL VALLE,1
partido de Vicente LOPEZ,FLORIDA,327
partido de Vicente LOPEZ,LA LUCILA,38
partido de Vicente LOPEZ,MUNRO,529
partido de Vicente LOPEZ,OLIVOS,355
partido de Vicente LOPEZ,Vicente López,242
partido de Vicente LOPEZ,VILLA MARTELLI,427`;


function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];

    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }

    const total = result.reduce((p,c)=>p+ parseInt(c.BENEFICIARIOS.replace(".","")),0);
    const promedio = total/result.length;
    
    result.map(e=>{
        e.porcentajeDelTotal = ((parseInt(e.BENEFICIARIOS.replace(".",""))/total));
        return e;
    } )
  
    //return result; //JavaScript object
    return result; //JSON
  }


//   console.log(csvJSON(csv));

  console.log(JSON.stringify(csvJSON(csv)));

// csvJSON(csv)