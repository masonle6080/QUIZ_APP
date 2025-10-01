//
//  FridgeTracker3App.swift
//  FridgeTracker3
//
//  Created by Mason Le on 8/9/25.
//

import SwiftUI

@main
struct FridgeTracker3App: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
