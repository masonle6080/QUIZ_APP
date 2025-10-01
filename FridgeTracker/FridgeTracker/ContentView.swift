import SwiftUI

struct ContentView: View {
    @State private var showExpire = true
    
    var body: some View {
        
        FridgeView()
            .sheet(isPresented: $showExpire){
                WelcomeView(expiringItems: ["Milk", "Spinach"]) {
                    showExpire = false
                }
            }
    }
    
    
}
