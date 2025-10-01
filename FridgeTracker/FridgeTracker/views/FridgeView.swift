import SwiftUI

struct FridgeView: View {
    var expiringItems: [String] = []

    var body: some View {
        VStack {
            Text("My Fridge")
                .font(.largeTitle)
                .padding(.horizontal, 15)
                .padding(.top, 15)
                .frame(maxWidth: .infinity, alignment: .leading)
            Categories()
                .padding(.horizontal, 2)
            

        }
        
        
    }
}


