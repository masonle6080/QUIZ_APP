import SwiftUI

extension Color {
    init(hex: UInt, alpha: Double = 1) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255,
            opacity: alpha
        )
    }
}

struct WelcomeView: View {
    var expiringItems: [String] = []
    var onContinue: () -> Void

    var body: some View {
        VStack(spacing:20){
            
            Text("Expiring Soon")
                .font(.largeTitle)
                .bold(true)
                .padding(.bottom, 45)
            
            
            if expiringItems.isEmpty {
                Text("Your fridge is empty!")
                    .foregroundColor(.green)
            } else {
                ForEach(expiringItems, id: \.self) { item in
                    HStack{
                        Text("\(item)")
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .foregroundColor(Color(hex: 0x3A3A3C))
                            .font(.custom("Roboto-Regular", size: 22))
                        
                        Text("1")
                            .frame(maxWidth: .infinity, alignment: .trailing)
                            .foregroundColor(.red)
                            .bold(true)
                            .font(.title2)
                    }
                        .padding(2)
                        .padding(.horizontal, 50)
                    
                }
                    

                
            }


            Spacer()
            
            Button("Fridge"){
                onContinue()
            }
                .padding(.horizontal, 130)
                .padding(.vertical, 20)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(11)
                .font(.title3)
        }
        .padding()
        .padding(.top, 60)
    }
    
    
}
