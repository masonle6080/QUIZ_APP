import SwiftUI
import CoreData

struct MainView: View {
    
    // Gets Core Data context from environment
    @Environment(\.managedObjectContext) private var viewContext
    // Fetch Items from Core Data
    @FetchRequest(
        sortDescriptors: [
            NSSortDescriptor(keyPath: \Item.category, ascending: true),
            NSSortDescriptor(keyPath: \Item.name, ascending: true)
        ],
        animation: .default
    )
    private var items: FetchedResults<Item>

    
    var groupedItems: [String: [Item]] {
        Dictionary(grouping: items, by: { $0.category ?? "Unknown" })
    }
    
    @State private var showingAddForm = false
    
    @State private var editingItem: Item? = nil
    
    
    var body: some View {
        NavigationView {
            VStack{
                List{
                    ForEach(groupedItems.keys.sorted(), id: \.self) { category in
                        Section(header: Text(category)) {
                            ForEach(groupedItems[category]!) { item in
                                Text(item.name?.isEmpty == false ? item.name! : "Unknown")
                                    .swipeActions(edge: .trailing) {
                                        Button(role:. destructive) {
                                            ItemDataManager.deleteItem(item,
                                                                       context: viewContext)
                                        } label: {
                                            Label("Delete", systemImage: "trash")
                                        }
                                        
                                        Button {
                                            editingItem = item
                                        } label: {
                                            Label("Edit", systemImage: "pencil")
                                        }
                                    }}
                            }
                        }
                    }
                    
                    
                    
                .toolbar {
                    ToolbarItem(placement: .navigationBarTrailing) {
                        Button(action: {
                            showingAddForm = true
                        }) {
                            Label("Add", systemImage: "plus")
                        }
                    }
                }
                
            }
            // Show AddItemFormView for editing when editingItem is non-nil
                   .sheet(item: $editingItem) { item in
                       AddItemFormView(item: item)
                   }
                   // Show AddItemFormView for adding when showingAddForm is true
                   .sheet(isPresented: $showingAddForm) {
                       AddItemFormView()
                   }
            /*.sheet(isPresented: $showingEdit){
                AddItemFormView(item: editingItem)
            }*/
            
            
            
            
        }
        
        
    }
}


