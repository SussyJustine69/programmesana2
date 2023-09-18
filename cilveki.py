import PySimpleGUI as sg

people_list = []

layout = [
    [sg.Text("Vārds"), sg.InputText(key="name")],
    [sg.Text("Vecums"), sg.InputText(key="age")],
    [sg.Text("Dzimums"), sg.InputText(key="gender")],
    [sg.Text("Numurs"), sg.InputText(key="number")],
    [sg.Button("Pievienot personu"), sg.Button("Dzimšanas diena!"), sg.Button("Mainīt vārdu"), sg.Button("Mainīt dzimumu"), sg.Button("Iziet")],
    [sg.Text("Cilvēki:")],
    [sg.Multiline("", size=(30, 10), key="people_list")]
]

window = sg.Window("Cilvēku saraksta programma", layout)

while True:
    event, values = window.read()

    if event == sg.WINDOW_CLOSED or event == "Iziet":
        break
    elif event == "Pievienot personu":
        name = values["name"]
        age = values["age"]
        gender = values["gender"]
        people_list.append(f"{len(people_list)}. {name}, {age}, {gender}")
        window["people_list"].update("\n".join(people_list))
    elif event == "Dzimšanas diena!" or event == "Mainīt vārdu" or event == "Mainīt dzimumu":
        try:
            index = int(values["number"])
            if 0 <= index < len(people_list):
                if event == "Dzimšanas diena!":
                    # Palielināt vecumu
                    parts = people_list[index].split(", ")
                    current_age = int(parts[1])
                    jaunais_vecums = current_age + 1
                    parts[1] = str(jaunais_vecums)
                    people_list[index] = ", ".join(parts)
                elif event == "Mainīt vārdu":
                    # Atjaunināt vārdu
                    new_name = values["name"]
                    parts = people_list[index].split(", ")
                    parts[0] = new_name
                    people_list[index] = ", ".join(parts)
                elif event == "Mainīt dzimumu":
                    # Atjaunināt dzimumu
                    new_gender = values["gender"]
                    parts = people_list[index].split(", ")
                    parts[2] = new_gender
                    people_list[index] = ", ".join(parts)
                window["people_list"].update("\n".join(people_list))
        except ValueError:
            sg.popup_error("Lūdzu, ievadiet derīgu numuru cilvēka indeksam.")

window.close()
