//
//  FoodItem+CoreDataProperties.swift
//  FridgeTracker
//
//  Created by Mason Le on 8/2/25.
//
//

import Foundation
import CoreData


extension FoodItem {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<FoodItem> {
        return NSFetchRequest<FoodItem>(entityName: "FoodItem")
    }

    @NSManaged public var expirationDate: Date?
    @NSManaged public var isExpired: Bool
    @NSManaged public var name: String?
    @NSManaged public var notes: String?
    @NSManaged public var quantity: Int16
    @NSManaged public var relationship: Category?

}

extension FoodItem : Identifiable {

}
