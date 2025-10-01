import SwiftUI
import CoreData

class ItemDataManager {
    static func addItem(
        name: String,
        category: String,
        date: Date,
        averageLifeSpan: Int16,
        daysLeft: Int16,
        context: NSManagedObjectContext
    ){
        let newItem = Item(context: context)
        newItem.name = name
        newItem.category = category
        newItem.date = date
        newItem.averageLifeSpan = averageLifeSpan
        newItem.daysLeft = daysLeft
        
        do {
            try context.save()
        } catch {
            let nsError = error as NSError
            fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
        }
        
    }
    
    static func deleteItem(_ item: Item, context: NSManagedObjectContext){
        context.delete(item)
        do {
            try context.save()
        } catch {
            let nsError = error as NSError
            fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
        }

    }
    
    static func updateItem(_ item: Item,
        name: String,
        category: String,
        averageLifeSpan: Int16,
        daysLeft: Int16,
        context: NSManagedObjectContext
    ){
        item.name = name
        item.category = category
        item.averageLifeSpan = averageLifeSpan
        item.daysLeft = daysLeft
        
        do {
            try context.save()
        } catch {
            let nsError = error as NSError
            fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
        }
        
        
    }
}
