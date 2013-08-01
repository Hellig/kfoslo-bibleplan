//Bibleplan for KF Oslo (Global function):
function getReading(date){
	switch(date){
        case "20.7":
        	return "Salme 126<br />Mal 1-2<br />Åpenbaringen 21";     
        break;
        case "21.7":
        	return "Malaki 3-4<br />Åpenbaringen 22";     
        break;
        case "22.7":
        	return "1. Mosebok 1-2<br />Lukas 1,1-25";     
        break;
        case "23.7":
        	return "1. Mosebok 3-5<br />Lukas 1,26-56";     
        break;
        case "24.7":
        	return "1. Mosebok 6-8<br />Lukas 1,57-80";     
        break;
        case "25.7":
        	return "1. Mosebok 9-11<br />Johannes 1,1-14";     
        break;
        case "26.7":
        	return "Job 1-3<br />Matteus 1";     
        break;
        case "27.7":
        	return "Job 4-6<br />Lukas 2,1-20";     
        break;
        case "28.7":
        	return "Job 7-9<br />Lukas 2,21-38";     
        break;
        case "29.7":
        	return "Job 10-13<br />Matteus 2";     
        break;
        case "30.7":
        	return "Job 14-16<br />Lukas 2,39-52";     
        break;
        case "31.7":
        	return "Job 17-20<br />Matteus 3";     
        break;
        case "1.8":
        	return "Job 21-23<br />Markus 1,1-20";     
        break;
        case "2.8":
        	return "Job 24-27<br />Markus 1,21-45";     
        break;
        case "3.8":
        	return "Job 28-30<br />Lukas 3,1-20";     
        break;
        case "4.8":
        	return "Job 31-33<br />Lukas 3,21-38";     
        break;
        case "5.8":
        	return "Job 34-36<br />Matteus 4,1-17";     
        break;
        case "6.8":
        	return "Job 37-39<br />Matteus 4,18-25";
        break;
        
        case "7.8";
        	return "Job 40-42<br />Lukas 4,1-30";
        	break;
        	
        case "8.8";
        	return "1. Mosebok 12-14<br />Lukas 4,31-5,11";
        	break;
        	
        case "9.8";
        	return "1. Mosebok 15-17<br />Lukas 5,12-39";
        	break;
        	
        case "10.8";
        	return "1. Mosebok 18-19<br />Johannes 1,15-34";
        	break;
        	
        case "11.8";
        	return "1. Mosebok 20-22<br />Johannes 1,35-51";
        	break;
        	
        case "12.8";
        	return "1. Mosebok 23-24<br />Johannes 2";
        	break;
        	
        case "13.8";
        	return "1. Mosebok 25-26<br />Johannes 3";
        	break;
        	
        case "14.8";
        	return "1. Mosebok 27-28<br />Johannes 4,1-26";
        	break;
        	
        case "15.8";
        	return "1. Mosebok 29-30<br />Johannes 4,27-42";
        	break;
        	
        case "16.8";
        	return "1. Mosebok 31-32<br />Johannes 4,43-54";
        	break;
        	
        case "17.8";
        	return "1. Mosebok 33-35<br />Markus 2";
        	break;
        	
        case "18.8";
        	return "1. Mosebok 36-38<br />Johannes 5,1-23";
        	break;
        	
        case "19.8";
        	return "1. Mosebok 39-41<br />Johannes 5,24-47";
        	break;
        	
        case "20.8";
        	return "1. Mosebok 42-44<br />Matteus 12,1-21";
        	break;
        	
        case "21.8";
        	return "1. Mosebok 45-47<br />Markus 3,1-19";
        	break;
        	
        case "22.8";
        	return "1. Mosebok 48-50<br />Markus 3,20-35";
        	break;
        	
        case "23.8";
        	return "2. Mosebok 1-3<br />Lukas 6,1-26";
        	break;
        	
        case "24.8";
        	return "2. Mosebok 4-6<br />Lukas 6,27-49";
        	break;
        	
        case "25.8";
        	return "2. Mosebok 7-8<br />Matteus 5,1-26";
        	break;
        	
        case "26.8";
        	return "2. Mosebok 9-11<br />Matteus 5,27-48";
        	break;
        	
        case "27.8";
        	return "2. Mosebok 12-13<br />Matteus 6,1-18";
        	break;
        	
        case "28.8";
        	return "2. Mosebok 14-15<br />Matteus 6,19-34";
        	break;
        	
        case "29.8";
        	return "2. Mosebok 16-18<br />Matteus 7";
        	break;
        	
        case "30.8";
        	return "2. Mosebok 19-21<br />Matteus 8,1-13";
        	break;
        	
        case "31.8";
        	return "2. Mosebok 22-23<br />Lukas 7,1-23";
        	break;
        	
        case "1.9";
        	return "2. Mosebok 24-26<br />Lukas 7,24-50";
        	break;
        	
        case "2.9";
        	return "2. Mosebok 27-28<br />Matteus 11";
        	break;
        	
        case "3.9";
        	return "2. Mosebok 29-30<br />Matteus 12,22-37";
        	break;
        	
        case "4.9";
        	return "2. Mosebok 31-33<br />Matteus 12,38-50";
        	break;
        	
        case "5.9";
        	return "2. Mosebok 34-35<br />Matteus 13,1-23";
        	break;
        	
        case "6.9";
        	return "2. Mosebok 36-38<br />Matteus 13,24-33";
        	break;
        	
        case "7.9";
        	return "2. Mosebok 39-40<br />Matteus 13,34-58";
        	break;
        	
        case "8.9";
        	return "3. Mosebok 1-3<br />Lukas 8,1-18";
        	break;
        	
        case "9.9";
        	return "3. Mosebok 4-5<br />Lukas 8,19-39";
        	break;
        	
        case "10.9";
        	return "3. Mosebok 6-7<br />Lukas 8,40-56";
        	break;
        	
        case "11.9";
        	return "3. Mosebok 8-10<br />Matteus 8,14-34";
        	break;
        	
        case "12.9";
        	return "3. Mosebok 11-12<br />Markus 4,1-20";
        	break;
        	
        case "13.9";
        	return "3. Mosebok 13<br />Markus 4,21-41";
        	break;
        	
        case "14.9";
        	return "3. Mosebok 14<br />Markus 5,1-20";
        	break;
        	
        case "15.9";
        	return "3. Mosebok 15-16<br />Markus 5,21-43";
        	break;
        	
        case "16.9";
        	return "3. Mosebok 17-19<br />Matteus 9,1-26";
        	break;
        	
        case "17.9";
        	return "3. Mosebok 20-22<br />Matteus 9,27-10,15";
        	break;
        	
        case "18.9";
        	return "3. Mosebok 23-24<br />Matteus 10,16-42";
        	break;
        	
        case "19.9";
        	return "3. Mosebok 25<br />Matteus 14,1-21";
        	break;
        	
        case "20.9";
        	return "3. Mosebok 26-27<br />Matteus 14,22-36";
        	break;
        	
        case "21.9";
        	return "4. Mosebok 1-2<br />Markus 6,1-29";
        	break;
        	
        case "22.9";
        	return "4. Mosebok 3<br />Markus 6,30-56";
        	break;
        	
        case "23.9";
        	return "4. Mosebok 4<br />Lukas 9,1-17";
        	break;
        	
        case "24.9";
        	return "4. Mosebok 5-6<br />Johannes 6,1-35";
        	break;
        	
        case "25.9";
        	return "4. Mosebok 7<br />Johannes 6,36-71";
        	break;
        	
        case "26.9";
        	return "4. Mosebok 8-10<br />Matteus 15,1-20";
        	break;
        	
        case "27.9";
        	return "4. Mosebok 11-13<br />Matteus 15,21-39";
        	break;
        	
        case "28.9";
        	return "4. Mosebok 14-15<br />Markus 7,1-23";
        	break;
        	
        case "29.9";
        	return "Salmene 90<br />4. Mosebok 16-17<br />Markus 7,24-37";
        	break;
        	
        case "30.9";
        	return "4. Mosebok 18-19<br />Matteus 16";
        	break;
        	
        
        }
    } 
