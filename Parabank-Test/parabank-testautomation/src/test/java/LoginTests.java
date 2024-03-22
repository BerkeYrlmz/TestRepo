import Base.BaseTest;
import Pages.HomePage;
import Pages.LoginPage;
import Pages.MainPage;
import org.junit.*;

public class LoginTests extends BaseTest
{
    LoginPage loginPage = new LoginPage();
    MainPage mainPage = new MainPage();
    HomePage homePage = new HomePage();

    @Test
    public void failUserTEST(){

        loginPage
                .fillUsername("QA")
                .fillPassword("TEST")
                .clickLogin();

        mainPage
                .errorMessageControl(errorMessage1);
    }

    @Test
    public void nonePasswordTEST(){

        loginPage
                .fillUsername("QA")
                .clickLogin();

        mainPage
                .errorMessageControl2(errorMessage2);
    }

    @Test
    public void noneIdAndPasswordTEST(){

        loginPage
                .fillUsername("")
                .fillPassword("")
                .clickLogin();

        mainPage
                .errorMessageControl2(errorMessage2);
    }

    @Test
    public void maxCharTEST(){

        loginPage
                .fillUsername("dfdgcvbdjshfgasdddfdhfaaddgfdgfgfd324rgfg43543543543t53gdshasfs")
                .fillPassword("fdhfgds5655f6785f67f78f6d4d46d6d5335ghssadsdhjf343345gfdg3")
                .clickLogin();


        mainPage
                .errorMessageControl(errorMessage1);
    }

    @Test
    public void successTEST(){

        loginPage
                .fillUsername(username)
                .fillPassword(password)
                .clickLogin();

        homePage
                .pageControl("Accounts Overview");
    }
}