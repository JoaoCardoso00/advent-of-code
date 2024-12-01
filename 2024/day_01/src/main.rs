use std::fs;

fn main() {
    let content = fs::read_to_string("input.txt").expect("Something went wrong reading the file");
    let lines: Vec<String> = content.lines().map(String::from).collect();

    let first_column: Vec<i32> = lines
        .iter()
        .map(|line| line.split(" ").collect::<Vec<&str>>()[0])
        .map(|line| {
            line.parse::<i32>()
                .expect("Failed to parse number in column 1")
        })
        .collect();

    let second_column: Vec<i32> = lines
        .iter()
        .map(|line| line.split(" ").collect::<Vec<&str>>()[3])
        .map(|line| {
            line.parse::<i32>()
                .expect("Failed to parse number in column 1")
        })
        .collect();

    let mut sum = 0;

    for i in 0..first_column.len() {
        let current = first_column[i];
        let mut repeat = 0;

        for j in 0..second_column.len() {
            if current == second_column[j] {
                repeat += 1;
            }
        }

        sum += current * repeat;
    }

    println!("The sum is: {}", sum);
}
