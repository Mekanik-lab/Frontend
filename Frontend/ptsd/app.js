// Definiowanie klas dynamicznie
class Pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.school = "Plastyk";
        this.health = 100;
    }

    showInfo() {
        console.log(`Imię: ${this.name}\nTyp: ${this.type}\nSzkoła: ${this.school}`);
    }

    attack() {
        console.log("Atak!");
        this.health -= 10;
    }
}

class Ufo extends Pokemon {
    constructor(name, type, planet) {
        super(name, type);
        this.planet = planet;
    }

    showInfo() {
        super.showInfo();
        console.log(`Planeta: ${this.planet}`);
    }
}

class Dragon extends Pokemon {
    constructor(name, type, firePower) {
        super(name, type);
        this.firePower = firePower;
    }

    showInfo() {
        super.showInfo();
        console.log(`Moc Ognia: ${this.firePower}`);
    }
}

class Robot extends Pokemon {
    constructor(name, type, model) {
        super(name, type);
        this.model = model;
    }

    showInfo() {
        super.showInfo();
        console.log(`Model: ${this.model}`);
    }
}

// Przechowujemy klasy i dodatkowe pola w obiekcie
const classDefinitions = {
    pokemon: {
        class: Pokemon,
        fields: []  // Brak dodatkowych pól dla Pokemon
    },
    ufo: {
        class: Ufo,
        fields: [{ name: 'planet', label: 'Planeta' }]
    },
    dragon: {
        class: Dragon,
        fields: [{ name: 'firePower', label: 'Moc Ognia' }]
    },
    robot: {
        class: Robot,
        fields: [{ name: 'model', label: 'Model' }]
    }
};

// Dodanie opcji do rozwijanego menu objectType
const objectTypeSelect = document.getElementById('objectType');
Object.keys(classDefinitions).forEach(classKey => {
    const option = document.createElement('option');
    option.value = classKey;
    option.textContent = classKey.charAt(0).toUpperCase() + classKey.slice(1);
    objectTypeSelect.appendChild(option);
});

// Obsługa dynamicznego formularza
objectTypeSelect.addEventListener('change', function () {
    const selectedType = this.value;
    const extraFieldsDiv = document.getElementById('extraFields');
    const fields = classDefinitions[selectedType].fields;

    // Usuwamy poprzednie pola
    extraFieldsDiv.innerHTML = '';

    // Dodajemy dynamicznie wymagane pola
    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.name);
        label.textContent = `${field.label}: `;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = field.name;
        extraFieldsDiv.appendChild(label);
        extraFieldsDiv.appendChild(input);
        extraFieldsDiv.appendChild(document.createElement('br'));
    });
});

// Obsługa formularza
document.getElementById('createForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const selectedType = document.getElementById('objectType').value;

    const fields = classDefinitions[selectedType].fields;
    const extraFieldValues = {};
    fields.forEach(field => {
        extraFieldValues[field.name] = document.getElementById(field.name).value;
    });

    // Tworzymy obiekt dynamicznie
    let newObject;
    const classConstructor = classDefinitions[selectedType].class;
    newObject = new classConstructor(name, type, ...Object.values(extraFieldValues));

    // Wyświetlamy utworzony obiekt
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Utworzony obiekt:</h3><pre>${JSON.stringify(newObject, null, 2)}</pre>`;

    // Można także wywołać showInfo() dla wypisania informacji do konsoli
    newObject.showInfo();
});
