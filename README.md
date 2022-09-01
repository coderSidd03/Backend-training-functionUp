# Promises & axios call

	- we use async await in (asynchronous operation) DB calls and axios calls

# promise has typically 3 states

	- pending		: not awaited and hence has not copmpleted yet ( .e.g. typically when we dont await an axios or DB call)
 	- Rejected		: when promise failed (wrong URL || server down etc )
 	- Fulfilled	: promise completed sucessfully  ( .e.g. DB call has completed and return a result successfully)

// extra state
- settled        : refers to a combination of either rejected or fulfilled
 
# What is a promise

- layman's definition  : it is something in js that tells us whether an operation has completed or not ( pending )

- technical definition : it is a js object that represent whether an asynchronous operation ( like DB & axios call ) is
  completed or not 