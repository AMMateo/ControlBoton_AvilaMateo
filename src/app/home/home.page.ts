import { Component } from '@angular/core';
import { Firestore, doc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Propiedades para el estado de los LEDs
  state1: any;
  state2: any;
  state3: any;

  // Propiedades para el control de los LEDs
  control: boolean = false;
  on1: boolean = false;
  on2: boolean = false;
  on3: boolean = false;
  on4: boolean = false;
  on5: boolean = false;
  allOn: boolean = false;
  allOff: boolean = false;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    // Inicialización de los estados de los LEDs
    this.retrieveState1();
    this.retrieveState2();
    this.retrieveState3();
    this.retrieveAllStates();
  }

  // Métodos para el control de cada LED individualmente
  async toggle1() {
    this.on1 = !this.on1;
    if (this.on1) {
      this.control = true;
    } else {
      this.control = false;
    }
    // Aquí debes agregar la lógica para actualizar el estado en la base de datos
  }

  async toggle2() {
    this.on2 = !this.on2;
    if (this.on2) {
      this.on3 = false;
    }
    // Aquí debes agregar la lógica para actualizar el estado en la base de datos
  }

  async toggle3() {
    this.on4 = !this.on4;
    if (this.on4) {
      this.on5 = false;
    }
    // Aquí debes agregar la lógica para actualizar el estado en la base de datos
  }

  // Métodos para el control de todos los LEDs
  async toggleAll() {
    this.allOn = !this.allOn;
    if (this.allOn) {
      this.control = true;
      this.on1 = true;
      this.on2 = true;
      this.on3 = true;
      this.on4 = true;
      this.on5 = true;
    } else {
      this.control = false;
      this.on1 = false;
      this.on2 = false;
      this.on3 = false;
      this.on4 = false;
      this.on5 = false;
    }
    // Aquí debes agregar la lógica para actualizar el estado en la base de datos
  }

  // Método para establecer el color de los botones
  buttonColorOn(state: boolean): string {
    return state ? "success " : "dark";
  }

  

  // Métodos para recuperar los estados de los LEDs individuales
  async retrieveState1() {
    const docRef = doc(this.firestore, "controlLED", 'LED1');
    const snapshot: DocumentSnapshot<any> = await getDoc(docRef);
    if (snapshot.exists()) {
      this.state1 = snapshot.data()?.encender;
      if (this.state1 === true) {
        this.control = true;
      } else {
        this.on1 = true;
      }
    }
  }

  async retrieveState2() {
    const docRef = doc(this.firestore, "controlLED", 'LED2');
    const snapshot: DocumentSnapshot<any> = await getDoc(docRef);
    if (snapshot.exists()) {
      this.state2 = snapshot.data()?.encender2;
      if (this.state2 === true) {
        this.on2 = true;
      } else {
        this.on2 = true;
      }
    }
  }

  async retrieveState3() {
    const docRef = doc(this.firestore, "controlLED", 'LED3');
    const snapshot: DocumentSnapshot<any> = await getDoc(docRef);
    if (snapshot.exists()) {
      this.state3 = snapshot.data()?.encender3;
      if (this.state3 === true) {
        this.on3 = true;
      } else {
        this.on3 = true;
      }
    }
  }

  // Método para recuperar el estado de todos los LEDs
  async retrieveAllStates() {
    const docRef1 = doc(this.firestore, "controlLED", 'LED1');
    const snap1: DocumentSnapshot<any> = await getDoc(docRef1);
    const docRef2 = doc(this.firestore, "controlLED", 'LED2');
    const snap2: DocumentSnapshot<any> = await getDoc(docRef2);
    const docRef3 = doc(this.firestore, "controlLED", 'LED3');
    const snap3: DocumentSnapshot<any> = await getDoc(docRef3);

    if (snap1.exists() && snap2.exists() && snap3.exists()) {
      const state1 = snap1.data()?.encender;
      const state2 = snap2.data()?.encender2;
      const state3 = snap3.data()?.encender3;

      if (state1 && state2 && state3) {
        this.allOn = true;
      } else {
        this.allOff = true;
      }
    }
  }
}
