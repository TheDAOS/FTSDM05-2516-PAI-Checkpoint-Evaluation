// Borrowed items: [
//     { title: "Harry Potter", daysOverdue: 5, category: "Fiction", isReserved: false },
//     { title: "Physics Textbook", daysOverdue: 12, category: "Academic", isReserved: true },
//     { title: "Cooking Magazine", daysOverdue: 3, category: "Periodical", isReserved: false },
//     { title: "Programming Guide", daysOverdue: 8, category: "Academic", isReserved: false }
//   ]
//   Fine strategies:
//   - $0.25 per day for standard items
//   - Double fine for reserved items
//   - Maximum $10 fine for periodicals
//   - 50% discount on fines if returning 3+ items at once

// Original fine amount: $16.00
// After special category adjustments: $19.00
// Final fine after all calculations: $9.50


const BorrowedBook = [
    { title: "Harry Potter", daysOverdue: 5, category: "Fiction", isReserved: false },
    { title: "Physics Textbook", daysOverdue: 12, category: "Academic", isReserved: true },
    { title: "Cooking Magazine", daysOverdue: 3, category: "Periodical", isReserved: false },
    { title: "Programming Guide", daysOverdue: 8, category: "Academic", isReserved: false }
]

calculateFine(BorrowedBook);


function calculateFine(BorrowedBook) {
    const output = BorrowedBook.reduce((a, book, index) => {
        let fine = book.daysOverdue * 0.25;
        let reservedFine = book.isReserved ? fine * 2 : fine;
        let totalFine = reservedFine;

        console.log(
            fine,
            reservedFine,
            totalFine
        )

        if (book.category === "Periodical" && reservedFine > 10) {
            totalFine = 10;
        }

        a.fineAmount += fine;
        a.reservedFineAmount += reservedFine
        a.totalAmount += totalFine
        a.discount = index >= 2;

        return a;
    }, {
        fineAmount: 0,
        reservedFineAmount: 0,
        totalAmount: 0,
        discount: false,
    })

    console.log(`
        Original fine amount: $${output.fineAmount.toFixed(2)}
        After special category adjustments: $${output.reservedFineAmount.toFixed(2)}
        Final fine after all calculations: $${output.discount? output.totalAmount.toFixed(2) * 0.5 : output.totalAmount.toFixed(2) }
    `)
}