const questions = [
  {
    id: 1,
    q: "What happens in the <em class='underline'>fetch</em> stage of the fetch-execute-decode (FDE) cycle?",
    choices: [
      "An instruction is moved from memory to the CPU",
      "The instruction is interpreted by the CPU",
      "The instruction is carried out",
      "The instruction is carried out, then the FDE process is repeated",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 2,
    q: "What happens in the <em class='underline'>decode</em> stage of the fetch-execute-decode (FDE) cycle?",
    choices: [
      "The instruction is interpreted by the CPU",
      "The instruction is carried out",
      "An instruction is moved from memory to the CPU",
      "The instruction is carried out, then the FDE process is repeated",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 3,
    q: "What happens in the <em class='underline'>execute</em> stage of the fetch-execute-decode (FDE) cycle?",
    choices: [
      "The instruction is carried out, then the FDE process is repeated",
"The instruction is carried out",
      "An instruction is moved from memory to the CPU",
      "The instruction is interpreted by the CPU",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 4,
    q: "Which of these describes the <em class='underline'>Control Unit (CU)</em>?",
    choices: [
      "interprets instructions, directs data flow within the CPU and memory, and coordinates execution of operations.",
      "performs arithmetic and logical operations such as addition, subtraction, multiplication, division, AND, OR, and NOT",
      "discrete storage locations in the CPU used to temporarily hold data, instructions, or addresses during the FDE cycle.",
      "small, high-speed memory in the CPU that stores frequently and recently used data."
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 5,
    q: "Which of these describes the <em class='underline'>Arithmetic Logic Unit (ALU)</em>?",
    choices: [
      "performs arithmetic and logical operations such as addition, subtraction, multiplication, division, AND, OR, and NOT",
      "discrete storage locations in the CPU used to temporarily hold data, instructions, or addresses during the FDE cycle.",
      "small, high-speed memory in the CPU that stores frequently and recently used data.",
      "interprets instructions, directs data flow within the CPU and memory, and coordinates execution of operations.",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 6,
    q: "Which of these describes a CPU <em class='underline'>register</em>?",
    choices: [
      "discrete storage locations in the CPU used to temporarily hold data, instructions, or addresses during the FDE cycle.",
      "small, high-speed memory in the CPU that stores frequently and recently used data.",
      "interprets instructions, directs data flow within the CPU and memory, and coordinates execution of operations.",
      "performs arithmetic and logical operations such as addition, subtraction, multiplication, division, AND, OR, and NOT",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 7,
    q: "Which of these describes <em class='underline'>cache memory</em>?",
    choices: [
      "small, high-speed memory in the CPU that stores frequently and recently used data.",
      "interprets instructions, directs data flow within the CPU and memory, and coordinates execution of operations.",
      "performs arithmetic and logical operations such as addition, subtraction, multiplication, division, AND, OR, and NOT",
      "discrete storage locations in the CPU used to temporarily hold data, instructions, or addresses during the FDE cycle.",
      
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 8,
    q: "What is the key principle of Von Neumann architecture?",
    choices: [
      "computer program instructions and data are stored in the <em class='bold'>same memory</em>",
      "computer program instructions and data are stored in <em class='bold'>different memory</em>",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 9,
    q: "Which statement is correct regarding Von Neumann architecture?",
    choices: [
      "Von Neumann architecture makes it easier to change a computer program",
      "Von Neumann architecture makes it harder to change a computer program",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 10,
    q: "Which hardware is required for a CPU that uses Von Neumann architecture?",
    choices: [
      "Control Unit, Arithmetic Logic Unit, buses, registers, input devices and output devices",
      "Control Unit, Arithmetic Logic Unit, buses, registers, retinal scanner and output devices",
      "Control Unit, Arithmetic Logic Unit, cables, registers, input devices and output devices",
      "Control Unit, Arithmetic Logic Unit, buses, registers, input devices, output devices and uninterruptible power supply",
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 11,
    q: "What function does the CPU serve?",
    choices: [
      "Performing the fetch-decode-execute cycle.",
      "To carry out instructions fetched from memory by repeating the fetch-decode-execute cycle.",
      "All of these options.",
      "Acting as the computer's 'brain'",
    ],
    answer: 2,
    topic: "CPU",
  },
  {
    id: 12,
    q: "What is hardware?",
    choices: [
      "The physical parts of a computer, like the keyboard, monitor, and CPU.",
      "Any program or app on the computer, like games or word processors.",  
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 13,
    q: "What is software?",
    choices: [
      "The physical parts of a computer, like the keyboard, monitor, and CPU.",
      "Any program or app on the computer, like games or word processors.",  
    ],
    answer: 1,
    topic: "CPU",
  },
  {
    id: 14,
    q: "What are the four main necessary components of a computer?",
    choices: [
      "Input devices, CPU, storage and output devices.",
      "A monitor, keyboard, printer and memory.",  
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 15,
    q: "Which of these describes the role of the <em class='bold'>program counter (PC)</em>?",
    choices: [
      "Holds the <em class='bold'>memory location (address)</em> of the <em class='bold'>next instruction</em> in a program that the computer needs to carry out.",
      "Holds the <em class='bold'>memory location (address)</em> for data that either needs to be fetched from memory or saved to memory.",
      "Holds <em class='bold'>data</em> that has been fetched from memory or is queued up to be transferred to memory.",
      "Holds the <em class='bold'>outcomes of calculations</em> performed by the Arithmetic Logic Unit (ALU) and keeps track of the <em class='bold'>values</em> coming into and going out of the CPU (CPU inputs and outputs)."  
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 16,
    q: "Which of these describes the role of the <em class='bold'>Memory Address Register (MAR)</em>?",
    choices: [
      "Holds the <em class='bold'>memory location (address)</em> of the <em class='bold'>next instruction</em> in a program that the computer needs to carry out.",
      "Holds the <em class='bold'>memory location (address)</em> for data that either needs to be fetched from memory or saved to memory.",
      "Holds <em class='bold'>data</em> that has been fetched from memory or is queued up to be transferred to memory.",
      "Holds the <em class='bold'>outcomes of calculations</em> performed by the Arithmetic Logic Unit (ALU) and keeps track of the <em class='bold'>values</em> coming into and going out of the CPU (CPU inputs and outputs)."  
    ],
    answer: 1,
    topic: "CPU",
  },
  {
    id: 17,
    q: "Which of these describes the role of the <em class='bold'>Memory Data Register (MDR)</em>?",
    choices: [
      "Holds the <em class='bold'>memory location (address)</em> of the <em class='bold'>next instruction</em> in a program that the computer needs to carry out.",
      "Holds the <em class='bold'>memory location (address)</em> for data that either needs to be fetched from memory or saved to memory.",
      "Holds <em class='bold'>data</em> that has been fetched from memory or is queued up to be transferred to memory.",
      "Holds the <em class='bold'>outcomes of calculations</em> performed by the Arithmetic Logic Unit (ALU) and keeps track of the <em class='bold'>values</em> coming into and going out of the CPU (CPU inputs and outputs)."  
    ],
    answer: 2,
    topic: "CPU",
  },
  {
    id: 18,
    q: "Which of these describes the role of the <em class='bold'>accumulator (ACC)</em>?",
    choices: [
      "Holds the <em class='bold'>memory location (address)</em> of the <em class='bold'>next instruction</em> in a program that the computer needs to carry out.",
      "Holds the <em class='bold'>memory location (address)</em> for data that either needs to be fetched from memory or saved to memory.",
      "Holds <em class='bold'>data</em> that has been fetched from memory or is queued up to be transferred to memory.",
      "Holds the <em class='bold'>outcomes of calculations</em> performed by the Arithmetic Logic Unit (ALU) and keeps track of the <em class='bold'>values</em> coming into and going out of the CPU (CPU inputs and outputs)."  
    ],
    answer: 3,
    topic: "CPU",
  },
  {
    id: 19,
    q: "Which factors can affect a computer's performance?",
    choices: [
      "Clock speed, cache memory, number of cores and RAM.",
      "Clock speed, cache memory, number of cores and having plenty of secondary storage",  
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 20,
    q: "Which of the following correctly describes an embedded system?",
    choices: [
      "It is a computer system that is part of a larger device.",
      "It is a stand-alone device.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 21,
    q: "Which of the following correctly describes an embedded system?",
    choices: [
      "It has a limited number of functions/uses.",
      "It has a huge number of functions/uses",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 20,
    q: "Which of the following correctly describes an embedded system?",
    choices: [
      "It is usually just one chip.",
      "It consists of multiple chips.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 21,
    q: "Which of the following correctly describes an embedded system? Explain your choice of answer.",
    choices: [
      "Its size is small.",
      "Its size is large.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 22,
    q: "Which of the following correctly describes an embedded system? Explain your choice of answer.",
    choices: [
      "It does not require much power.",
      "It requires a lot of power.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 23,
    q: "Which of the following correctly describes an embedded system? Explain your choice of answer.",
    choices: [
      "Durable.",
      "Fragile.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 24,
    q: "Which of the following correctly describes an embedded system? Explain your choice of answer.",
    choices: [
      "It is low-cost.",
      "It is expensive.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 25,
    q: "Which of the following correctly describes an embedded system? Explain your choice of answer.",
    choices: [
      "It uses firmware (dedicated software) to complete one task or a small number of tasks.",
      "It uses ordinary software to complete many different tasks.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 26,
    q: "Would a dishwasher contain an embedded system or a general purpose computer?",
    choices: [
      "embedded system",
      "general purpose computer",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 27,
    q: "Would a washing machine contain an embedded system or a general purpose computer?",
    choices: [
      "embedded system",
      "general purpose computer",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 28,
    q: "Would a microwave contain an embedded system or a general purpose computer?",
    choices: [
      "embedded system",
      "general purpose computer",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 29,
    q: "Would a home security system contain an embedded system or a general purpose computer?",
    choices: [
      "embedded system",
      "general purpose computer",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 30,
    q: "Would an industrial robot contain an embedded system or a general purpose computer?",
    choices: [
      "embedded system",
      "general purpose computer",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 31,
    q: "Where on a computer are software programs and data stored?",
    choices: [
      "secondary storage",
      "primary storage",  
    ],
    answer: 0,
    topic: "primary storage",
  },
  {
    id: 32,
    q: "Can the CPU directly access data held in secondary storage?",
    choices: [
      "no",
      "yes",  
    ],
    answer: 0,
    topic: "primary storage",
  },
  {
    id: 33,
    q: "What needs to happen for the CPU to be able to access data held in secondary storage?",
    choices: [
      "the operating system needs to load the data into primary storage/main memory (RAM)",
      "virtual memory should be used",  
    ],
    answer: 0,
    topic: "primary storage",
  },
  {
    id: 34,
    q: "Which statement is true?",
    choices: [
      "A user cannot change the software (firmware) held in an embedded system's ROM.",
      "A user can change the software (firmware) held in an embedded system's ROM.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 35,
    q: "Which statement is true?",
    choices: [
      "A user cannot run general software (such as a Word processor) on an embedded system.",
      "A user can run general software (such as a Word processor) on an embedded system",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 36,
    q: "Embedded systems are controlled by programs held in their...",
    choices: [
      "ROM",
      "RAM",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 37,
    q: "Would an air-conditioning unit contain an embedded system or a general purpose computer?",
    choices: [
      "embedded system",
      "general purpose computer",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 38,
    q: "When can the CPU access a program/data from secondary memory?",
    choices: [
      "After the program has been loaded into RAM.",
      "Before the program has been loaded into RAM.",  
    ],
    answer: 0,
    topic: "primary storage",
  },
  {
    id: 39,
    q: "Does an embedded system require a full operating system?",
    choices: [
      "No, because it has limited functions.",
      "Yes, this is necessary for it to work.",  
    ],
    answer: 0,
    topic: "embedded systems",
  },
  {
    id: 40,
    q: "What does the clock speed set?",
    choices: [
      "The number of fetch-decode-execute cycles per second.",
      "The number of fetch-decode-execute cycles per minute.",  
    ],
    answer: 0,
    topic: "CPU",
  },
  {
    id: 41,
    q: "If a clock's speed is 3.5 GHz (gigahertz), how many cycles per second will it perform?",
    choices: [
      "3.5 billion",
      "3.5 million",
      "3.5 trillion"  
    ],
    answer: 0,
    topic: "CPU",
  },


   
  //





]
