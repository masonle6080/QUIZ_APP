//
//  ContentView.swift
//  FridgeTracker3
//
//  Created by Mason Le on 8/9/25.
//

import SwiftUI
import CoreData

struct ContentView: View {
    @Environment(\.managedObjectContext) private var viewContext
    
    @FetchRequest(
        sortDescriptors: [NSSortDescriptor(keyPath: \Item.date, ascending: true)],
        animation: .default)
    private var items: FetchedResults<Item>
    
    @State private var notOpenedYet = true
    
    var body: some View {
        FridgeView()
            .sheet(isPresented: $notOpenedYet) {
                expiringView()
            }
    }
    
}
