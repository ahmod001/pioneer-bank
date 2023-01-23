//  Login Page ---------------------------------------------------------------- 

    const signIn = document.getElementById ('signBtn');
            signIn.addEventListener('click', function () {
        
        const loginArea = document.getElementById ('login-area');
                loginArea.style.display = 'none'
           
                const transactionArea = document.getElementById ('transaction');
                        transactionArea.style.display = 'block';
        })
    
         // DEPOSIT------------------------------------
         const deposit = document.getElementById ('deposit');
            deposit.addEventListener ('click', function () {

         const depositInput = document.getElementById('depositAmount').value;
                Input = parseFloat (depositInput);

         const Deposit = document.getElementById ('depositCard').innerText;
                  currentDeposit = parseFloat (Deposit);
       
                  const totalDeposit = currentDeposit + Input;
         document.getElementById ('depositCard').innerText = totalDeposit;
        
         // Update Balance
         const balance = document.getElementById ('balance').innerText;
         const Balance = parseFloat (balance);
         const totalBalanceAdded = Balance + totalDeposit;
         document.getElementById ('balance').innerText = totalBalanceAdded
         
    })
        // WITHDRAW------------------------------------
        const Withdraw = document.getElementById ('withdraw');
                Withdraw.addEventListener ('click', function () {
                
        const withdrawInput = document.getElementById ('withdrawAmount').value;
        const Input = parseFloat (withdrawInput);

        const withdraw = document.getElementById ('withdrawCard').innerText;
        const currentWithdraw = parseFloat (withdraw);
        const totalWithdraw = currentWithdraw + Input;
        document.getElementById ('withdrawCard').innerText = totalWithdraw

        // Update Balance
        const Balance = document.getElementById ('balance').innerText;
                balance = parseFloat (Balance);
        const totalBalanceSubtracted = balance - totalWithdraw;
                document.getElementById ('balance').innerText = totalBalanceSubtracted 


        })