//
//  FridgeTracker1App.swift
//  FridgeTracker1
//
//  Created by Mason Le on 8/6/25.
//

import SwiftUI

@main
struct FridgeTracker1App: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
