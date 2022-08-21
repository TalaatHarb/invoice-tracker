package net.talaatharb.invoicetracker.dtos;

public class ResetBody {

    private String password;
    private String resetToken;

    public String getResetToken() {
        return resetToken;
    }

    public void setResetToken(String resetToken) {
        this.resetToken = resetToken;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
