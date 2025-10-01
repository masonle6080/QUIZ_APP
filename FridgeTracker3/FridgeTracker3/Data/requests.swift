//
//  requests.swift
//  FridgeTracker3
//
//  Created by Mason Le on 8/9/25.
//
import SwiftUI
import CoreData

class DataHandler {
    static func createItem(
        name: String,
        category: String,
        location: String,
        date: Date,
        daysLeftUntilExpired: Int,
        context: NSManagedObjectContext
    ) {
        let newItem = Item(context: context)
        
        newItem.name = name
        newItem.category = category
        newItem.location = location
        newItem.date = Date()
        newItem.daysLeftUntilExpired = Int16(daysLeftUntilExpired)
        
        do {
            try context.save()
        } catch {
            let errorDescription = error as NSError
            print("\(errorDescription.localizedDescription)")
        }
    }
    
    static func deleteItem(
        item: Item,
        context: NSManagedObjectContext) {
        context.delete(item)
        
        do {
            try context.save()
        } catch {
            let errorDescription = error as NSError
            print("\(errorDescription.localizedDescription)")
        }
    }
    
    static func editItem(
        item:Item,
        name: String,
        category: String,
        location: String,
        daysLeftUntilExpired: Int,
        context: NSManagedObjectContext
    ) {
        item.name = name
        item.category = category
        item.location = location
        item.daysLeftUntilExpired = Int16(daysLeftUntilExpired)
        
        do {
            try context.save()
        } catch {
            let errorDescription = error as NSError
            print("\(errorDescription.localizedDescription)")
        }
    }
}
