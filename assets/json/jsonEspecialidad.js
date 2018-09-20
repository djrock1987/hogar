
        var group=new Array(groups)
        var descs=new Array(groups)

        for (i=0; i<groups; i++){
           group[i]=new Array()
           descs[i]=new Array()
        }


        descs[0] = ""

        
descs[1] = "Anestesiolog�a, Ginecolog�a, Ginecobstetras, Traumatolog�a."
descs[2] = "Cabeza y Cuello, Cardiolog�a, Cirug�a Cardiovascular, Cirug�a de Cabeza y Cuello, Cirug�a de Columna, Cirug�a de Mama y Tumores de Tejidos Blandos, Cirug�a de Mano, Cirug�a de T�rax (Cirug�a Tor�cica), Cirug�a Gastroenterol�gica, Cirug�a Gastrointestinal y Endoscopia Digestiva, Cirug�a General, Cirug�a Oncol�gica, Cirug�a Pedi�trica, Cirug�a Pl�stica Reconstructiva, Cirug�a Vascular Perif�rica, Cirug�a Vascular y Angiolog�a, Geriatr�a, Laringolog�a, Medicina Critica y Cuidado Intensivo Pedi�trico, Nefrolog�a, Neonatolog�a, Neopl�sica, Neumoencelografia, Neumolog�a, Neurocirug�a, Neurolog�a, Oculoplastia, Quimioterapia, Radiolog�a - Con Diagn�stico, Radiolog�a e Im�genes Diagnosticas, Radioterapia o Terapia Radiante, Tor�cica, Urolog�a, Vascular, Cirug�a Oral y Maxilofacial, Cirug�a y Traumatolog�a Buco Maxilo Facial, Oral y Maxilofacial, Remoci�n de Hueso-Cordales Impactadas, Remoci�n de Tejido Cordales Impactadas, Otorrino y Oftalmolog�a."
descs[3] = "Angiolog�a General y Hemodinamia, Coloproctologia, Cuidado Intensivo Pedi�trico, Dermatolog�a, Enfermedades Neopl�sicas, Enfermedades Vasculares, Epidemiologia Cl�nica, Epidemiologia General, Gastroenterolog�a, Glaucoma, Hematolog�a, Hemodinamia y Cardiolog�a Intervencionista, Hemoterapia e Inmunohematologia, Imagenologia Oncol�gica, Kinesi�logo, Medicina Aerospacial, Medicina de Emergencias, Medicina del Deporte, Medicina del Dolor, Medicina Familiar, Medicina F�sica y de Rehabilitaci�n, Medicina Forense, Medicina General, Medicina Interna, Medicina Nuclear, Medicina Ocupacional, Medicina Psicosom�tica, Medicina Materno Fetal, Neurofisiolog�a Cl�nica, Obstetricia, Oftalmolog�a, Oncolog�a, Ortopedia, Otolog�a, Otorrinolaringolog�a, Pediatr�a, Psiquiatr�a, Reumatolog�a, Rinolog�a, Toxicolog�a, Prostodoncia, Pr�tesis Dentobucomaxilar, Rehabilitaci�n Oral, Enfermer�a Cardiorrespiratoria, Enfermer�a Materna Perinatal, Enfermer�a Neurol�gica, Enfermer�a Oncol�gica, Enfermer�a Pedi�trica, Cuidado Cr�tico, Cuidado Respiratorio, Atenci�n Pre-Hospitalaria, Bacteriolog�a y Laboratorio Cl�nico, Fisioterapia � Kinesiolog�a, Fonoaudiolog�a, Medicina General, Alergia e Inmunolog�a, Alimentaci�n y Nutrici�n en Promoci�n de Salud, Anatom�a Patol�gica, Diabeto Logia, Endocrinolog�a, Ergonom�a, Fisiatr�a, Fisioterapeuta, Fonoaudi�logo, Infecto Logia, Patolog�a, Salud Ocupacional, Terapia Miofuncional Oro Facial y Disfagia, Nutrici�n y Diet�tica, Optometr�a, Psicolog�a, Psiquiatr�a, Terapia Ocupacional, Veterinaria."
descs[4] = "Ecocardiograf�a, Electrofisiolog�a Cl�nica, Odontopediatria, Diagnostico por Im�genes Buco Maxilofacial, Endodoncia, Odontolog�a Legal, Ortodoncia y Ortopedia Maxilar, Periodoncia y Medicina Oral, Auxiliar de Urgencias Medicas, Odontolog�a."
descs[5] = "Auxiliar de Anestesia, Auxiliar de Consultorio Odontol�gico, Auxiliar de Droguer�a, Auxiliar de Enfermer�a, Auxiliar de Gerontolog�a, Auxiliar de Higiene Oral, Auxiliar de Laboratorio Cl�nico, Auxiliar de Radiolog�a, Cito T�cnico, Enfermer�a, Qu�mica Farmac�utica, Instrumentaci�n Quir�rgica, Mec�nica Dental."
descs[6] = "Estudiantes Medicina Pr�ctica."
descs[7] = "Estudiantes Odontolog�a Pr�ctica."




        /*
        descs[1] = "ANESTESIOLOG�A, GINECOLOG�A GINECOBSTETRAS, TRAUMATOLOG�A."
        descs[2] = "CABEZA Y CUELLO, CARDIOLOG�A, CIRUG�A CARDIOVASCULAR, CIRUG�A DE CABEZA Y CUELLO, CIRUG�A DE COLUMNA, CIRUG�A DE MAMA Y TUMORES DE TEJIDOS BLANDOS, CIRUG�A DE MANO CIRUG�A DE T�RAX (CIRUG�A TOR�CICA), CIRUG�A GASTROENTEROL�GICA, CIRUG�A GASTROINTESTINAL Y ENDOSCOPIA DIGESTIVA, CIRUG�A GENERAL, CIRUG�A ONCOL�GICA, CIRUG�A PEDI�TRICA, CIRUG�A PL�STICA RECONSTRUCTIVA, CIRUG�A VASCULAR PERIF�RICA, CIRUG�A VASCULAR Y ANGIOLOG�A, GERIATR�A, LARINGOLOG�A, MEDICINA CRITICA Y CUIDADO INTENSIVO PEDI�TRICO, NEFROLOG�A, NEONATOLOG�A, NEOPL�SICA, NEUMOENCELOGRAFIA, NEUMOLOG�A, NEUROCIRUG�A, NEUROLOG�A, OCULOPLASTIA, QUIMIOTERAPIA, RADIOLOG�A - CON DIAGN�STICO, RADIOLOG�A E IM�GENES DIAGNOSTICAS, RADIOTERAPIA O TERAPIA RADIANTE, TOR�CICA, UROLOG�A, VASCULAR, CIRUG�A ORAL Y MAXILOFACIAL, CIRUG�A Y TRAUMATOLOG�A BUCO MAXILO FACIAL, ORAL Y MAXILOFACIAL, REMOCI�N DE HUESO-CORDALES IMPACTADAS, REMOCI�N DE TEJIDO CORDALES IMPACTADAS, OTORRINO Y OFTAMOLOGIA."
        descs[3] = "ANGIOLOG�A GENERAL Y HEMODINAMIA, COLOPROCTOLOGIA, CUIDADO INTENSIVO PEDI�TRICO, DERMATOLOG�A, ENFERMEDADES NEOPL�SICAS, ENFERMEDADES VASCULARES, EPIDEMIOLOGIA CL�NICA, EPIDEMIOLOGIA GENERAL, GASTROENTEROLOG�A, GLAUCOMA, HEMATOLOG�A, HEMODINAMIA Y CARDIOLOG�A INTERVENCIONISTA, HEMOTERAPIA E INMUNOHEMATOLOGIA, IMAGENOLOGIA ONCOL�GICA, KINESI�LOGO, MEDICINA AEROSPACIAL, MEDICINA DE EMERGENCIAS, MEDICINA DEL DEPORTE, MEDICINA DEL DOLOR, MEDICINA FAMILIAR, MEDICINA F�SICA Y DE REHABILITACI�N, MEDICINA FORENSE, MEDICINA GENERAL, MEDICINA INTERNA, MEDICINA NUCLEAR, MEDICINA OCUPACIONAL, MEDICINA PSICOSOM�TICA, MEDICINA MATERNO FETAL, NEUROFISIOLOG�A CL�NICA, OBSTETRICIA, OFTALMOLOG�A, ONCOLOG�A, ORTOPEDIA, OTOLOG�A, OTORRINOLARINGOLOG�A, PEDIATR�A, PSIQUIATR�A, REUMATOLOG�A, RINOLOG�A, TOXICOLOG�A, PROSTODONCIA, PR�TESIS DENTOBUCOMAXILAR, REHABILITACI�N ORAL, ENFERMER�A CARDIORRESPIRATORIA, ENFERMER�A MATERNA PERINATAL, ENFERMER�A NEUROL�GICA, ENFERMER�A ONCOL�GICA, ENFERMER�A PEDI�TRICA, CUIDADO CR�TICO, CUIDADO RESPIRATORIO, ATENCI�N PRE HOSPITALARIA, BACTERIOLOG�A Y LABORATORIO CL�NICO, FISIOTERAPIA � KINESIOLOG�A, FONOAUDIOLOG�A, MEDICINA GENERAL, ALERGIA E INMUNOLOG�A, ALIMENTACI�N Y NUTRICI�N EN PROMOCI�N DE SALUD, ANATOM�A PATOL�GICA, DIABETO LOGIA, ENDOCRINOLOG�A, ERGONOM�A, FISIATR�A, FISIOTERAPEUTA, FONOAUDI�LOGO, INFECTO LOGIA, PATOLOG�A, SALUD OCUPACIONAL, TERAPIA MIOFUNCIONAL ORO FACIAL Y DISFAGIA, NUTRICI�N Y DIET�TICA, OPTOMETR�A, PSICOLOG�A, PSIQUIATR�A, TERAPIA OCUPACIONAL, VETERINARIA."
        descs[4] = "ECOCARDIOGRAF�A, ELECTROFISIOLOG�A CL�NICA, ODONTOPEDIATRIA, DIAGNOSTICO POR IM�GENES BUCO MAXILOFACIAL, ENDODONCIA, ODONTOLOG�A LEGAL, ORTODONCIA Y ORTOPEDIA MAXILAR, PERIODONCIA Y MEDICINA ORAL, AUXILIAR DE URGENCIAS MEDICAS, ODONTOLOG�A."
        descs[5] = "AUXILIAR DE ANESTESIA, AUXILIAR DE CONSULTORIO ODONTOL�GICO, AUXILIAR DE DROGUER�A, AUXILIAR DE ENFERMER�A, AUXILIAR DE GERONTOLOG�A, AUXILIAR DE HIGIENE ORAL, AUXILIAR DE LABORATORIO CL�NICO, AUXILIAR DE RADIOLOG�A, CITO T�CNICO, ENFERMER�A, QU�MICA FARMAC�UTICA, INSTRUMENTACI�N QUIR�RGICA, MEC�NICA DENTAL."
        descs[6] = "ESTUDIANTES MEDICINA PR�CTICA."
        descs[7] = "ESTUDIANTES ODONTOLOG�A PR�CTICA."
        */



        group[0][0]=new Option("---Seleccione la especialidad---","$ 0");
        group[1][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[1][1]=new Option("1500 MM","$        1,602,747");
group[1][2]=new Option("1200 MM","$        1,404,254");
group[1][3]=new Option("1000 MM","$        1,271,961");
group[1][4]=new Option("800 MM","$        1,139,668");
group[1][5]=new Option("600 MM","$          951,327");
group[1][6]=new Option("500 MM","$          888,406");
group[1][7]=new Option("300 MM","$          705,564");
group[1][8]=new Option("200 MM","$          642,431");
group[1][9]=new Option("170 MM","$          551,592");
group[1][10]=new Option("100 MM","$          480,317");
group[1][11]=new Option("50 MM","$          361,559");
group[1][12]=new Option("20 MM","$          236,563");

        /*
        group[1][1]=new Option("600 MM","$ 848.700");
        group[1][2]=new Option("500 MM","$ 792.500");
        group[1][3]=new Option("300 MM","$ 629.400");
        group[1][4]=new Option("200 MM","$ 573.100");
        group[1][5]=new Option("170 MM","$ 492.100");
        group[1][6]=new Option("100 MM","$ 428.500");
        group[1][7]=new Option("50 MM","$ 322.500");
        group[1][8]=new Option("20 MM","$ 211.000");
        group[1][9]=new Option("800 MM","$ 1.077.700");
        */

        group[2][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[2][1]=new Option("1500 MM","$        1,244,149");
group[2][2]=new Option("1200 MM","$        1,090,388");
group[2][3]=new Option("1000 MM","$          987,917");
group[2][4]=new Option("800 MM","$          885,445");
group[2][5]=new Option("600 MM","$          736,443");
group[2][6]=new Option("500 MM","$          689,067");
group[2][7]=new Option("300 MM","$          536,047");
group[2][8]=new Option("200 MM","$          482,432");
group[2][9]=new Option("170 MM","$          335,756");
group[2][10]=new Option("100 MM","$          292,293");
group[2][11]=new Option("50 MM","$          259,299");
group[2][12]=new Option("20 MM","$          169,412");

        /*
        group[2][1]=new Option("600 MM","$ 657.000");
        group[2][2]=new Option("500 MM","$ 614.700");
        group[2][3]=new Option("300 MM","$ 478.200");
        group[2][4]=new Option("200 MM","$ 430.400");
        group[2][5]=new Option("170 MM","$ 299.500");
        group[2][6]=new Option("100 MM","$ 260.800");
        group[2][7]=new Option("50 MM","$ 231.300");
        group[2][8]=new Option("20 MM","$ 151.100");
        */

        group[3][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[3][1]=new Option("1500 MM","$          824,850");
group[3][2]=new Option("1200 MM","$          723,330");
group[3][3]=new Option("1000 MM","$          655,650");
group[3][4]=new Option("800 MM","$          587,970");
group[3][5]=new Option("600 MM","$          470,059");
group[3][6]=new Option("500 MM","$          441,083");
group[3][7]=new Option("300 MM","$          394,553");
group[3][8]=new Option("200 MM","$          305,723");
group[3][9]=new Option("170 MM","$          284,150");
group[3][10]=new Option("100 MM","$          245,975");
group[3][11]=new Option("50 MM","$          221,018");
group[3][12]=new Option("20 MM","$          112,518");

        /*
        group[3][1]=new Option("600 MM","$ 419.300");
        group[3][2]=new Option("500 MM","$ 393.500");
        group[3][3]=new Option("300 MM","$ 352.000");
        group[3][4]=new Option("200 MM","$ 272.700");
        group[3][5]=new Option("170 MM","$ 253.500");
        group[3][6]=new Option("100 MM","$ 219.400");
        group[3][7]=new Option("50 MM","$ 197.200");
        group[3][8]=new Option("20 MM","$ 100.400");
        */


        group[4][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[4][1]=new Option("1500 MM","$          738,664");
group[4][2]=new Option("1200 MM","$          647,190");
group[4][3]=new Option("1000 MM","$          586,172");
group[4][4]=new Option("800 MM","$          525,155");
group[4][5]=new Option("600 MM","$          414,329");
group[4][6]=new Option("500 MM","$          387,362");
group[4][7]=new Option("300 MM","$          323,807");
group[4][8]=new Option("200 MM","$          297,475");
group[4][9]=new Option("170 MM","$          250,945");
group[4][10]=new Option("100 MM","$          218,903");
group[4][11]=new Option("50 MM","$          133,139");
group[4][12]=new Option("20 MM","$           79,630");

        /*
        group[4][1]=new Option("600 MM","$ 369.600");
        group[4][2]=new Option("500 MM","$ 345.600");
        group[4][3]=new Option("300 MM","$ 288.900");
        group[4][4]=new Option("200 MM","$ 265.400");
        group[4][5]=new Option("170 MM","$ 223.900");
        group[4][6]=new Option("100 MM","$ 195.300");
        group[4][7]=new Option("50 MM","$ 118.800");
        group[4][8]=new Option("20 MM","$  71.000");
        */

        group[5][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[5][1]=new Option("300 MM","$          252,214");
group[5][2]=new Option("200 MM","$          215,942");
group[5][3]=new Option("170 MM","$          203,463");
group[5][4]=new Option("100 MM","$          176,708");
group[5][5]=new Option("50 MM","$          104,375");
group[5][6]=new Option("20 MM","$           65,036");

        /*
        group[5][1]=new Option("200 MM","$ 192.600");
        group[5][2]=new Option("170 MM","$ 181.500");
        group[5][3]=new Option("100 MM","$ 157.600");
        group[5][4]=new Option("50 MM","$  93.100");
        group[5][5]=new Option("20 MM","$  58.000");
        */

        group[6][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[6][1]=new Option("300 MM","$          426,173");
group[6][2]=new Option("200 MM","$          345,062");
group[6][3]=new Option("170 MM","$          321,586");
group[6][4]=new Option("100 MM","$          294,514");
group[6][5]=new Option("50 MM","$          262,366");
group[6][6]=new Option("20 MM","$          133,139");

        /*
        group[6][1]=new Option("100 MM","$ 262.700");
        group[6][2]=new Option("50 MM","$ 234.100");
        group[6][3]=new Option("20 MM","$ 118.800");
        */

        group[7][0]=new Option("Seleccione el valor deseado","$ 0");
        
group[7][1]=new Option("300 MM","$          352,994");
group[7][2]=new Option("200 MM","$          318,413");
group[7][3]=new Option("170 MM","$          293,879");
group[7][4]=new Option("100 MM","$          262,366");
group[7][5]=new Option("50 MM","$          160,211");
group[7][6]=new Option("20 MM","$           94,964");

        /*
        group[7][1]=new Option("100 MM","$ 234.100");
        group[7][2]=new Option("50 MM","$ 142.900");
        group[7][3]=new Option("20 MM","$  84.700");
        */


        var temp=document.forma.p_tip;

        function redirect(x){
           for (m=temp.options.length-1;m>0;m--)
             temp.options[m]=null

             window.document.forma.aboutDescription.value=descs[x];


             for (i=0;i<group[x].length;i++) {
                temp.options[i]=new Option(group[x][i].text,group[x][i].value)
             }

           redirect1(0);
        }

        function redirect1(y){

            n=window.document.forma.p_tip[y].text;
            window.document.forma.valor.value=window.document.forma.p_tip[y].value;
        }
