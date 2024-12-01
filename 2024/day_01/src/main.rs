use std::fs;

fn main() {
    let content = fs::read_to_string("input.txt").expect("Something went wrong reading the file");
    let lines: Vec<String> = content.lines().map(String::from).collect();

    let mut first_column: Vec<i32> = lines
        .iter()
        .map(|line| line.split(" ").collect::<Vec<&str>>()[0])
        .map(|line| {
            line.parse::<i32>()
                .expect("Failed to parse number in column 1")
        })
        .collect();

    let mut second_column: Vec<i32> = lines
        .iter()
        .map(|line| line.split(" ").collect::<Vec<&str>>()[3])
        .map(|line| {
            line.parse::<i32>()
                .expect("Failed to parse number in column 1")
        })
        .collect();

    first_column.sort();
    second_column.sort();

    let mut sum = 0;

    for i in 0..first_column.len() {
        let bigger = if first_column[i] > second_column[i] {
            first_column[i]
        } else {
            second_column[i]
        };

        let smaller = if bigger == first_column[i] {
            second_column[i]
        } else {
            first_column[i]
        };

        sum += bigger - smaller;
    }

    println!("{}", sum);
}
