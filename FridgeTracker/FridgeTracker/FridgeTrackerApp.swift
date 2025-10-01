//
//  FridgeTrackerApp.swift
//  FridgeTracker
//
//  Created by Mason Le on 7/3/25.
//

import SwiftUI

@main
struct FridgeTrackerApp: App {
    let persistenceController = PersistenceController.shared
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
