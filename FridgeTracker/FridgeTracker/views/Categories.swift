import SwiftUI

struct Categories: View {
    let foods = ["Banana", "Apples", "Oranges", "Potatoes", "Onions", "Carrots"]

    var body: some View {
        GeometryReader { geometry in
            // Calculate available width minus some padding
            let availableWidth = geometry.size.width - 16
            // Define desired minimum width per grid item
            let minItemWidth: CGFloat = 160
            // Calculate number of columns that fit
            let numberOfColumns = max(Int(availableWidth / minItemWidth), 1)
            
            // Create flexible columns based on calculated count
            let columns = Array(repeating: GridItem(.flexible(), spacing: 14), count: numberOfColumns)
            
            ScrollView {
                LazyVGrid(columns: columns, spacing: 14) {
                    ForEach(foods, id: \.self) { food in
                        Text(food)
                            .font(.headline)
                            .frame(maxWidth: .infinity)
                            .aspectRatio(1.075, contentMode: .fit)
                            .frame(minHeight: 145)
                            .background(Color.gray.opacity(0.2))
                            .cornerRadius(16)
                    }
                }
                .padding(8)
            }
        }
    }
}
