import SwiftUI
import CoreData

struct AddItemFormView: View {
    
    var item: Item? = nil
    
    @Environment(\.managedObjectContext) private var viewContext

    @State private var name: String = ""
    @State private var selectedCategory: String = "Miscellaneous"
    @State private var averageLifeSpan: Int16 = 0
    let categories = ["Fruit", "Vegetable", "Protein", "Dairy", "Drink", "Miscellaneous"]
    
    var formValid: Bool{
        !name.isEmpty && !selectedCategory.isEmpty && averageLifeSpan != 0
    }
    
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        
        VStack {
            
            Text("Add an item")
            

            SwiftUI.Form {
                
                Section(header: Text("Info")){
                    
                    TextField(item?.name ?? "Name", text: $name)
                    
                    Picker(item?.category ?? "Category", selection: $selectedCategory) {
                        ForEach(categories, id: \.self) {category in
                        Text(category)}
                    }
                    //.pickerStyle(InlinePickerStyle())
                    
                    TextField(item?.averageLifeSpan.description ?? "averageLifeSpan", value: $averageLifeSpan, format: .number)
                        .keyboardType(.numberPad)
                }
                
                var buttonText: String {
                    item != nil ? "Update" : "Add"
                }
                
                Button(buttonText) {
                    let daysLeft = 1 // CALCULATE LATER
                    if(item == nil) {
                        ItemDataManager.addItem(name: name,
                                                category: selectedCategory,
                                                date: Date(),
                                                averageLifeSpan: averageLifeSpan,
                                                daysLeft: Int16(daysLeft),
                                                context: viewContext
                                                )
                        
                    } else {
                        
                    }
                    
                    dismiss()
                    
                }
                .disabled(!formValid && item == nil)
            }
        }
    }
}
